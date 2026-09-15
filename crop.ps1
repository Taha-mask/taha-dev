Add-Type -AssemblyName System.Drawing

$sourcePath = "D:\Projects\taha-dev\public\icons\Gemini_Generated_Image_kbv977kbv977kbv9.png"
$destPng = "D:\Projects\taha-dev\public\favicon.png"

$img = [System.Drawing.Image]::FromFile($sourcePath)
$width = $img.Width
$height = $img.Height

# We want a square crop from the center
$size = [math]::Min($width, $height)
$x = [math]::Floor(($width - $size) / 2)
$y = [math]::Floor(($height - $size) / 2)

$bmp = New-Object System.Drawing.Bitmap $size, $size
$g = [System.Drawing.Graphics]::FromImage($bmp)
$rect = New-Object System.Drawing.Rectangle $x, $y, $size, $size
$destRect = New-Object System.Drawing.Rectangle 0, 0, $size, $size
$g.DrawImage($img, $destRect, $rect, [System.Drawing.GraphicsUnit]::Pixel)

$bmp.Save($destPng, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Host "Done cropping!"
