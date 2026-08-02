Add-Type -AssemblyName System.Drawing
New-Item -ItemType Directory -Force -Path 'public/assets/testimonials'

function Crop-Image($srcPath, $dstPath, $cropXRatio, $cropYRatio, $cropWidthRatio, $cropHeightRatio) {
    $img = [System.Drawing.Image]::FromFile($srcPath)
    $x = [int]($img.Width * $cropXRatio)
    $y = [int]($img.Height * $cropYRatio)
    $w = [int]($img.Width * $cropWidthRatio)
    $h = [int]($img.Height * $cropHeightRatio)
    
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $img.Dispose()
    $bmp.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
}

Crop-Image 'C:\Users\aniru\.gemini\antigravity-ide\brain\312e8fab-98bd-40b3-b2ab-1d807fad1f1f\media__1785693372985.jpg' 'public\assets\testimonials\anukriti.jpg' 0.28 0.19 0.38 0.31
Crop-Image 'C:\Users\aniru\.gemini\antigravity-ide\brain\312e8fab-98bd-40b3-b2ab-1d807fad1f1f\media__1785693373050.jpg' 'public\assets\testimonials\jyoti.jpg' 0.28 0.22 0.38 0.31
Crop-Image 'C:\Users\aniru\.gemini\antigravity-ide\brain\312e8fab-98bd-40b3-b2ab-1d807fad1f1f\media__1785693373055.jpg' 'public\assets\testimonials\arti-singh.jpg' 0.28 0.22 0.38 0.31

Write-Host "Cropped testimonial avatars successfully!"
