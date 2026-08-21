const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:\\Users\\aniru\\.gemini\\antigravity-ide\\brain\\450f7b59-67a4-42d8-bbcb-774409323c7a\\.user_uploaded\\media_1786970279750.jpg';

async function buildDirectHighRes() {
  console.log('Building high-res assets directly from source image...');
  
  const img = sharp(inputPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // 1. Clean the black background:
  // Zero out the 4px border artifacts and any noise < 20 brightness
  const cleaned = Buffer.from(data);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      if (x < 4 || x >= width - 4 || y < 4 || y >= height - 4) {
        cleaned[idx] = 0;
        cleaned[idx + 1] = 0;
        cleaned[idx + 2] = 0;
      } else {
        const avg = (cleaned[idx] + cleaned[idx + 1] + cleaned[idx + 2]) / 3;
        if (avg < 20) {
          cleaned[idx] = 0;
          cleaned[idx + 1] = 0;
          cleaned[idx + 2] = 0;
        }
      }
    }
  }

  // 2. Find exact emblem bounding box
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      if (cleaned[idx] > 0 || cleaned[idx + 1] > 0 || cleaned[idx + 2] > 0) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;
  console.log('Emblem dimensions:', { minX, maxX, minY, maxY, cropW, cropH });

  // 3. Extract the emblem crop cleanly
  const emblemCrop = await sharp(cleaned, { raw: { width, height, channels } })
    .extract({ left: minX, top: minY, width: cropW, height: cropH })
    .png()
    .toBuffer();

  // 4. Create a 1024x1024 master canvas on pure black #000000
  const canvasSize = 1024;
  const targetSize = Math.round(canvasSize * 0.78); // 78% size so it's beautifully proportioned
  
  // Resize emblem with lanczos3 high quality interpolation
  const emblemResized = await sharp(emblemCrop)
    .resize({
      width: targetSize,
      height: targetSize,
      fit: 'contain',
      kernel: 'lanczos3',
      background: { r: 0, g: 0, b: 0, alpha: 1 }
    })
    .toBuffer();

  const meta = await sharp(emblemResized).metadata();
  const left = Math.round((canvasSize - meta.width) / 2);
  const top = Math.round((canvasSize - meta.height) / 2);

  // Composite onto master black canvas
  const master1024 = await sharp({
    create: {
      width: canvasSize,
      height: canvasSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 }
    }
  })
  .composite([{ input: emblemResized, left, top }])
  .png({ compressionLevel: 9 })
  .toBuffer();

  // 5. Create transparent background version (by treating black as alpha)
  const masterRaw = await sharp(master1024).raw().toBuffer({ resolveWithObject: true });
  const transData = Buffer.alloc(canvasSize * canvasSize * 4);
  for (let i = 0; i < canvasSize * canvasSize; i++) {
    const r = masterRaw.data[i * 4];
    const g = masterRaw.data[i * 4 + 1];
    const b = masterRaw.data[i * 4 + 2];
    const brightness = (r + g + b) / 3;

    transData[i * 4] = r;
    transData[i * 4 + 1] = g;
    transData[i * 4 + 2] = b;
    // Smooth alpha transition
    if (brightness < 5) {
      transData[i * 4 + 3] = 0;
    } else if (brightness < 40) {
      transData[i * 4 + 3] = Math.round(((brightness - 5) / 35) * 255);
    } else {
      transData[i * 4 + 3] = 255;
    }
  }

  const trans1024 = await sharp(transData, { raw: { width: canvasSize, height: canvasSize, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toBuffer();

  // 6. Generate all required output files:
  const master512 = await sharp(master1024).resize(512, 512, { kernel: 'lanczos3' }).png().toBuffer();
  const master256 = await sharp(master1024).resize(256, 256, { kernel: 'lanczos3' }).png().toBuffer();
  const master192 = await sharp(master1024).resize(192, 192, { kernel: 'lanczos3' }).png().toBuffer();
  const master180 = await sharp(master1024).resize(180, 180, { kernel: 'lanczos3' }).png().toBuffer();
  const master48 = await sharp(master1024).resize(48, 48, { kernel: 'lanczos3' }).png().toBuffer();
  const master32 = await sharp(master1024).resize(32, 32, { kernel: 'lanczos3' }).png().toBuffer();
  const master16 = await sharp(master1024).resize(16, 16, { kernel: 'lanczos3' }).png().toBuffer();

  // Write PNG files to public/ and app/
  fs.writeFileSync('public/logo.png', master512);
  fs.writeFileSync('public/brand-logo.png', master512);
  fs.writeFileSync('public/logo-512.png', master512);
  fs.writeFileSync('public/logo-192.png', master192);
  fs.writeFileSync('public/logo-transparent.png', trans1024);
  fs.writeFileSync('app/icon.png', master512);
  fs.writeFileSync('app/apple-icon.png', master180);
  fs.writeFileSync('public/apple-touch-icon.png', master180);
  fs.writeFileSync('public/favicon-32x32.png', master32);
  fs.writeFileSync('public/favicon-16x16.png', master16);

  // 7. Multi-resolution ICO (16, 32, 48)
  const frames = [
    { size: 16, buf: master16 },
    { size: 32, buf: master32 },
    { size: 48, buf: master48 }
  ];

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(frames.length, 4);

  const dirEntries = [];
  let offset = 6 + frames.length * 16;

  for (const frame of frames) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(frame.size, 0);
    entry.writeUInt8(frame.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(frame.buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    dirEntries.push(entry);
    offset += frame.buf.length;
  }

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...frames.map(f => f.buf)]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('app/favicon.ico', icoBuffer);

  console.log('All image assets successfully built and written!');
}

buildDirectHighRes().catch(err => {
  console.error(err);
  process.exit(1);
});
