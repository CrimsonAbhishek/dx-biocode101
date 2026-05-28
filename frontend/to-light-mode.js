const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = [...walk('./app'), ...walk('./components')];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Colors
  content = content.replace(/text-white/g, 'text-slate-900');
  content = content.replace(/text-slate-200/g, 'text-slate-800');
  content = content.replace(/text-slate-300/g, 'text-slate-700');
  content = content.replace(/text-slate-400/g, 'text-slate-600');
  
  // Backgrounds
  content = content.replace(/bg-white\/5/g, 'bg-slate-900/5');
  content = content.replace(/bg-white\/10/g, 'bg-slate-900/10');
  content = content.replace(/bg-slate-800/g, 'bg-white');
  content = content.replace(/bg-slate-900/g, 'bg-slate-50');
  content = content.replace(/bg-\[#0a0f1c\]/g, 'bg-white');
  
  // Borders
  content = content.replace(/border-white\/10/g, 'border-slate-900/10');
  content = content.replace(/border-white\/15/g, 'border-slate-900/15');
  content = content.replace(/border-white\/20/g, 'border-slate-900/20');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log('Light mode migration complete.');
