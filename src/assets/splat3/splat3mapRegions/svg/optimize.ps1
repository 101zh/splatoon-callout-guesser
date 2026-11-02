# Use the directory where this script is saved as the working folder
$currentDir = $PSScriptRoot
$outputDir = Join-Path $currentDir "optimized"

# Ensure the output directory exists
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

# Find all SVG files in the current folder
$svgFiles = Get-ChildItem -Path $currentDir -Filter "*.svg"

foreach ($file in $svgFiles) {
    $outFile = Join-Path $outputDir $file.Name
    Write-Host "Optimizing: $($file.Name)"

    # Using the corrected extension ID matching your system's supported extensions
    Start-Process -FilePath "inkscape" -ArgumentList "`"$($file.FullName)`" --export-type=svg --export-extension=org.inkscape.output.scour_inkscape --export-filename=`"$outFile`"" -NoNewWindow -Wait
}

Write-Host "All SVGs optimized and saved to: $outputDir" -ForegroundColor Green
