Add-Type -AssemblyName System.Drawing

$sourcePath = "D:\Projects\taha-dev\public\icons\Gemini_Generated_Image_kbv977kbv977kbv9.png"
$destPng = "D:\Projects\taha-dev\public\favicon.png"

$img = [System.Drawing.Bitmap]::FromFile($sourcePath)

$centerX = 2242
$centerY = 553
$radius = 450
$size = $radius * 2

$bmp = New-Object System.Drawing.Bitmap $size, $size
$g = [System.Drawing.Graphics]::FromImage($bmp)

$srcRect = New-Object System.Drawing.Rectangle ($centerX - $radius), ($centerY - $radius), $size, $size
$destRect = New-Object System.Drawing.Rectangle 0, 0, $size, $size
$g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

# Make near-white transparent
for ($y = 0; $y -lt $size; $y++) {
    for ($x = 0; $x -lt $size; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        }
    }
}

$bmp.Save($destPng, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Host "Perfectly cropped and background removed!"
