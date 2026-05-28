$files = @(
    ".\app\dx-101\page.tsx",
    ".\app\applications\page.tsx",
    ".\app\certifications\page.tsx",
    ".\app\about\page.tsx",
    ".\app\contact\page.tsx",
    ".\app\downloads\page.tsx",
    ".\app\loading.tsx",
    ".\app\not-found.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Text colors
        $content = $content -replace 'text-white(?!\/)', 'text-slate-900 dark:text-white'
        $content = $content -replace 'text-slate-400', 'text-slate-600 dark:text-slate-400'
        $content = $content -replace 'text-slate-300', 'text-slate-700 dark:text-slate-300'
        $content = $content -replace 'text-cyan-400(?!\/)', 'text-cyan-600 dark:text-cyan-400'
        $content = $content -replace 'text-fuchsia-400(?!\/)', 'text-fuchsia-600 dark:text-fuchsia-400'
        
        # Backgrounds
        $content = $content -replace 'bg-white/5(?!\d)', 'bg-white/50 dark:bg-white/5'
        $content = $content -replace 'bg-white/10(?!\d)', 'bg-slate-100 dark:bg-white/10'
        
        # Borders
        $content = $content -replace 'border-white/10', 'border-slate-300 dark:border-white/10'
        $content = $content -replace 'border-white/15', 'border-slate-300 dark:border-white/15'
        $content = $content -replace 'border-cyan-400/20', 'border-cyan-200 dark:border-cyan-400/20'

        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "Updated $file"
    }
}
Write-Host "Done applying variants to remaining pages."
