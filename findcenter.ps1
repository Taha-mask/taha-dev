Add-Type -AssemblyName System.Drawing

$sourcePath = "D:\Projects\taha-dev\public\icons\Gemini_Generated_Image_kbv977kbv977kbv9.png"
$img = [System.Drawing.Bitmap]::FromFile($sourcePath)

$sumX = 0L
$sumY = 0L
$count = 0L

for ($y = 0; $y -lt $img.Height; $y+=5) {
    for ($x = 0; $x -lt $img.Width; $x+=5) {
        $c = $img.GetPixel($x, $y)
        if ($c.G -gt 150 -and $c.R -lt 120 -and $c.B -lt 150) {
            $sumX += $x
            $sumY += $y
            $count++
        }
    }
}

if ($count -gt 0) {
    $centerX = [math]::Floor($sumX / $count)
    $centerY = [math]::Floor($sumY / $count)
    Write-Host "Image Size: $($img.Width) x $($img.Height)"
    Write-Host "Center of Green Logo: $centerX, $centerY (Count: $count)"
} else {
    Write-Host "No green pixels found!"
}
$img.Dispose()
