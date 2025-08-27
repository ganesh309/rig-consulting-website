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

async function updatePage(pageName: string) {
  const pagePath = path.join(baseDir, pageName, 'page.tsx');
  
  try {
    let content = await fs.promises.readFile(pagePath, 'utf8');
    
    // Remove metadata export if it exists
    content = content.replace(/export\s+const\s+metadata:?\s*[^=]+=\s*{[^}]*};?\s*/g, '');
    
    // Add 'use client' at the top if not present
    if (!content.includes("'use client'")) {
      content = `'use client';\n\n${content}`;
    }
    
    // Ensure proper imports
    if (!content.includes("import { useEffect, useRef } from 'react'")) {
      content = content.replace(
        /import\s+.*?from\s+['"]react['"]/,
        'import { useEffect, useRef } from \'react\''
      );
    }
    
    await fs.promises.writeFile(pagePath, content, 'utf8');
    console.log(`✅ Updated: ${pageName}/page.tsx`);
  } catch (error) {
    console.error(`❌ Error updating ${pageName}:`, error);
  }
}

async function main() {
  console.log('🚀 Updating career pages...\n');
  
  // Process pages in parallel
  await Promise.all(careerPages.map(updatePage));
  
  console.log('\n✨ All pages have been processed!');
}

main().catch(console.error);
