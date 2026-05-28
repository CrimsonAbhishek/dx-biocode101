$baseDir = "c:\Users\MSI\Desktop\dx-biocode\frontend"
$files = @(
    "$baseDir\app\dx-101\page.tsx",
    "$baseDir\app\applications\page.tsx",
    "$baseDir\app\certifications\page.tsx",
    "$baseDir\app\about\page.tsx",
    "$baseDir\app\contact\page.tsx",
    "$baseDir\app\downloads\page.tsx",
    "$baseDir\app\loading.tsx",
    "$baseDir\app\not-found.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = [System.IO.File]::ReadAllText($file)
        
        $content = $content -replace 'text-white(?!\/)', 'text-slate-900 dark:text-white'
        $content = $content -replace 'text-slate-400', 'text-slate-600 dark:text-slate-400'
        $content = $content -replace 'text-slate-300', 'text-slate-700 dark:text-slate-300'
        $content = $content -replace 'text-cyan-400(?!\/)', 'text-cyan-600 dark:text-cyan-400'
        $content = $content -replace 'text-fuchsia-400(?!\/)', 'text-fuchsia-600 dark:text-fuchsia-400'
        
        $content = $content -replace 'bg-white/5(?!\d)', 'bg-white/50 dark:bg-white/5'
        $content = $content -replace 'bg-white/10(?!\d)', 'bg-slate-100 dark:bg-white/10'
        
        $content = $content -replace 'border-white/10', 'border-slate-300 dark:border-white/10'
        $content = $content -replace 'border-white/15', 'border-slate-300 dark:border-white/15'
        $content = $content -replace 'border-cyan-400/20', 'border-cyan-200 dark:border-cyan-400/20'

        [System.IO.File]::WriteAllText($file, $content)
        Write-Host "Updated $file"
    } else {
        Write-Host "File not found: $file"
    }
}
Write-Host "Done."
