import fs from 'fs';
import path from 'path';

const pagesToFix = [
  'consultancy',
  'finance',
  'it',
  'management',
  'marketing',
  'research-development'
];

const baseDir = path.join(process.cwd(), 'app', 'careers');

async function fixPage(pageName: string) {
  const pagePath = path.join(baseDir, pageName, 'page.tsx');
  
  try {
    let content = await fs.promises.readFile(pagePath, 'utf8');
    
    // Remove metadata export if it exists
    content = content.replace(/export\s+const\s+metadata:?\s*[^=]+=\s*{[^}]*};?\s*/g, '');
    
    // Remove 'use client' if it exists (to avoid duplicates)
    content = content.replace(/'use client';?\n*/g, '');
    
    // Remove type imports from 'next'
    content = content.replace(/import\s+type\s+\{\s*Metadata\s*}\s+from\s+['"]next['"];?\s*/g, '');
    
    // Add 'use client' at the top
    content = `'use client';\n\n${content}`;
    
    // Clean up multiple newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    await fs.promises.writeFile(pagePath, content, 'utf8');
    console.log(`✅ Fixed: ${pageName}/page.tsx`);
  } catch (error) {
    console.error(`❌ Error fixing ${pageName}:`, error);
  }
}

async function main() {
  console.log('🚀 Fixing remaining career pages...\n');
  
  // Process pages in parallel
  await Promise.all(pagesToFix.map(fixPage));
  
  console.log('\n✨ All remaining career pages have been fixed!');
}

main().catch(console.error);
