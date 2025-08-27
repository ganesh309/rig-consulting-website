const fs = require('fs');
const path = require('path');

// List of career pages to update
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

// Base directory for career pages
const baseDir = path.join(process.cwd(), 'app', 'careers');

// Function to update a single page
function updatePage(pageName) {
  const pagePath = path.join(baseDir, pageName, 'page.tsx');
  
  try {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Check if 'use client' is already present
    if (!content.includes("'use client'")) {
      // Add 'use client' after the imports
      content = content.replace(
        /^(import\s+.*?;\s*?\n)(\n|export)/s,
        (match, imports, after) => {
          return `${imports.trim()}\n\n'use client';\n\n${after}`;
        }
      );
      
      // Save the updated content
      fs.writeFileSync(pagePath, content, 'utf8');
      console.log(`✅ Updated: ${pageName}/page.tsx`);
    } else {
      console.log(`ℹ️  Already updated: ${pageName}/page.tsx`);
    }
  } catch (error) {
    console.error(`❌ Error updating ${pageName}:`, error.message);
  }
}

// Update all pages
console.log('🚀 Updating career pages...\n');
careerPages.forEach(updatePage);
console.log('\n✨ All pages have been processed!');
