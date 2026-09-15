Add-Type -AssemblyName System.Drawing

$sourcePath = "D:\Projects\taha-dev\public\icons\Gemini_Generated_Image_kbv977kbv977kbv9.png"
$destPng = "D:\Projects\taha-dev\public\favicon.png"

$img = [System.Drawing.Bitmap]::FromFile($sourcePath)
$width = $img.Width
$height = $img.Height

$minX = $width
$minY = $height
$maxX = 0
$maxY = 0

for ($y = 0; $y -lt $height; $y+=5) {
    for ($x = 0; $x -lt $width; $x+=5) {
        $c = $img.GetPixel($x, $y)
        if ($c.R -lt 100 -and $c.G -lt 100 -and $c.B -lt 100) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$padding = 20
$minX = [math]::Max(0, $minX - $padding)
$minY = [math]::Max(0, $minY - $padding)
$maxX = [math]::Min($width - 1, $maxX + $padding)
$maxY = [math]::Min($height - 1, $maxY + $padding)

$boxWidth = $maxX - $minX + 1
$boxHeight = $maxY - $minY + 1

$size = [math]::Max($boxWidth, $boxHeight)
$offsetX = [math]::Floor(($size - $boxWidth) / 2)
$offsetY = [math]::Floor(($size - $boxHeight) / 2)

$bmp = New-Object System.Drawing.Bitmap $size, $size
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::White)

$srcRect = New-Object System.Drawing.Rectangle $minX, $minY, $boxWidth, $boxHeight
$destRect = New-Object System.Drawing.Rectangle $offsetX, $offsetY, $boxWidth, $boxHeight
$g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$bmp.Save($destPng, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Host "Cropped size: $size x $size. MinX: $minX, MinY: $minY, MaxX: $maxX, MaxY: $maxY"
