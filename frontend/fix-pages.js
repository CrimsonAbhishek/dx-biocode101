const fs = require('fs');
const path = require('path');

const filesToFix = [
  "app/dx-101/page.tsx",
  "app/applications/page.tsx",
  "app/certifications/page.tsx",
  "app/about/page.tsx",
  "app/contact/page.tsx",
  "app/downloads/page.tsx",
  "app/loading.tsx",
  "app/not-found.tsx"
];

for (const relPath of filesToFix) {
  const fullPath = path.join(__dirname, relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Text colors
    content = content.replace(/text-white(?!\/)/g, 'text-slate-900 dark:text-white');
    content = content.replace(/text-slate-400/g, 'text-slate-600 dark:text-slate-400');
    content = content.replace(/text-slate-300/g, 'text-slate-700 dark:text-slate-300');
    content = content.replace(/text-cyan-400(?!\/)/g, 'text-cyan-600 dark:text-cyan-400');
    content = content.replace(/text-fuchsia-400(?!\/)/g, 'text-fuchsia-600 dark:text-fuchsia-400');
    
    // Backgrounds
    content = content.replace(/bg-white\/5(?!\d)/g, 'bg-white/50 dark:bg-white/5');
    content = content.replace(/bg-white\/10(?!\d)/g, 'bg-slate-100 dark:bg-white/10');
    
    // Borders
    content = content.replace(/border-white\/10/g, 'border-slate-300 dark:border-white/10');
    content = content.replace(/border-white\/15/g, 'border-slate-300 dark:border-white/15');
    content = content.replace(/border-cyan-400\/20/g, 'border-cyan-200 dark:border-cyan-400/20');
    content = content.replace(/border-cyan-400\/10/g, 'border-cyan-200/50 dark:border-cyan-400/10');
    content = content.replace(/border-fuchsia-400\/10/g, 'border-fuchsia-200/50 dark:border-fuchsia-400/10');

    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${relPath}`);
  } else {
    console.log(`File not found: ${relPath}`);
  }
}
console.log('All files updated successfully.');
