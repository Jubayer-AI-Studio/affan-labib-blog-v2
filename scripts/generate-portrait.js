// scripts/generate-portrait.js
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const portraitSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF8F5"/>
      <stop offset="100%" stop-color="#F5EFE6"/>
    </linearGradient>
    <linearGradient id="terracotta" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9A3412"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="600" height="600" fill="url(#bg)"/>

  <!-- Outer Traditional Decorative Ring -->
  <circle cx="300" cy="300" r="270" fill="none" stroke="#9A3412" stroke-width="4" stroke-opacity="0.3"/>
  <circle cx="300" cy="300" r="255" fill="none" stroke="#FAF8F5" stroke-width="6" stroke-dasharray="14 10"/>
  <circle cx="300" cy="300" r="240" fill="url(#terracotta)" filter="url(#shadow)"/>

  <!-- Stylized Elegant Scholar / Reader Silhouette / Emblem -->
  <g transform="translate(300, 270)">
    <!-- Scholar Head / Turban / Profile contour -->
    <circle cx="0" cy="-60" r="48" fill="#FAF8F5"/>
    <!-- Scholar Robe / Shoulders Contour -->
    <path d="M-105 110 C-105 30 -60 0 0 0 C60 0 105 30 105 110 Z" fill="#FAF8F5"/>
    
    <!-- Inner Accent: Traditional Pen & Book Motif -->
    <path d="M-30 65 L0 40 L30 65 Z" fill="#9A3412"/>
    <text x="0" y="-50" font-family="'Noto Serif Bengali', serif" font-size="44" font-weight="bold" fill="#7C2D12" text-anchor="middle">লা</text>
  </g>

  <!-- Author Name Tag at bottom -->
  <rect x="150" y="470" width="300" height="54" rx="27" fill="#FAF8F5" filter="url(#shadow)"/>
  <text x="300" y="504" font-family="'Noto Serif Bengali', serif" font-size="24" font-weight="bold" fill="#7C2D12" text-anchor="middle">
    আফফান লাবীব
  </text>
</svg>
`;

async function generate() {
  console.log('Generating author portrait at public/images/affan-labib.jpg...');
  await sharp(Buffer.from(portraitSvg))
    .jpeg({ quality: 92 })
    .toFile(path.resolve(imagesDir, 'affan-labib.jpg'));
  console.log('Generated affan-labib.jpg successfully!');
}

generate().catch(console.error);
