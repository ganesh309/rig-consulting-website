import fs from 'fs';
import path from 'path';

const careerPages = [
  'advisory',
  'consultancy',
  'finance',
  'it',
  'legal',
  'management',
  'marketing',
  'research-development',
  'sales',
  'talent-acquisition'
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
    
    // Add 'use client' at the top
    content = `'use client';\n\n${content}`;
    
    // Clean up imports
    content = content.replace(/import\s+type\s+\{\s*Metadata\s*}\s+from\s+['"]next['"];?\s*/g, '');
    
    // Remove duplicate newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    await fs.promises.writeFile(pagePath, content, 'utf8');
    console.log(`✅ Fixed: ${pageName}/page.tsx`);
  } catch (error) {
    console.error(`❌ Error fixing ${pageName}:`, error);
  }
}

async function main() {
  console.log('🚀 Fixing all career pages...\n');
  
  // Process pages in parallel
  await Promise.all(careerPages.map(fixPage));
  
  console.log('\n✨ All career pages have been fixed!');
}

main().catch(console.error);
