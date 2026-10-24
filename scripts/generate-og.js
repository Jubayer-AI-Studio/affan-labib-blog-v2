// scripts/generate-og.js
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 1200x630 Standard Open Graph Image SVG
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF8F5"/>
      <stop offset="100%" stop-color="#F5EFE6"/>
    </linearGradient>
    <linearGradient id="terracotta" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9A3412"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>
  </defs>

  <!-- Background Paper Texture Base -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Left Spine Banner (Traditional Red Kherokhata Spine) -->
  <rect x="0" y="0" width="70" height="630" fill="url(#terracotta)"/>
  <!-- Stitching line on the spine -->
  <line x1="35" y1="20" x2="35" y2="610" stroke="#FAF8F5" stroke-width="4" stroke-dasharray="16 12" stroke-opacity="0.6"/>

  <!-- Inner Double Margin Line -->
  <rect x="100" y="40" width="1050" height="550" rx="16" fill="none" stroke="#E2D9CE" stroke-width="2"/>
  <rect x="108" y="48" width="1034" height="534" rx="12" fill="none" stroke="#9A3412" stroke-width="1.5" stroke-opacity="0.3"/>

  <!-- Top Literary Category Ribbon -->
  <g transform="translate(160, 110)">
    <rect width="160" height="34" rx="17" fill="#9A3412" fill-opacity="0.1"/>
    <text x="80" y="22" font-family="'Noto Serif Bengali', serif" font-size="16" font-weight="600" fill="#9A3412" text-anchor="middle">ডিজিটাল চিন্তাঘর</text>
  </g>

  <!-- Main Title -->
  <text x="160" y="220" font-family="'Noto Serif Bengali', serif" font-size="76" font-weight="bold" fill="#2C2825" letter-spacing="1">
    লাবীবের খেরোখাতা
  </text>

  <!-- Subtitle Tagline -->
  <text x="160" y="295" font-family="'Noto Serif Bengali', serif" font-size="32" font-weight="400" fill="#7C2D12">
    চিন্তা ও পাঠের নিভৃত আঙিনা
  </text>

  <!-- Author Badge -->
  <g transform="translate(160, 360)">
    <circle cx="28" cy="28" r="28" fill="#9A3412"/>
    <text x="28" y="36" font-family="'Noto Serif Bengali', serif" font-size="24" font-weight="bold" fill="#FAF8F5" text-anchor="middle">লা</text>
    <text x="74" y="24" font-family="'Noto Serif Bengali', serif" font-size="24" font-weight="bold" fill="#2C2825">আফফান লাবীব</text>
    <text x="74" y="46" font-family="'Noto Serif Bengali', serif" font-size="16" font-weight="400" fill="#78716C">লেখক, পাঠক ও চিন্তাশীল পর্যটক</text>
  </g>

  <!-- Decorative Separator Line -->
  <line x1="160" y1="460" x2="1080" y2="460" stroke="#E2D9CE" stroke-width="2"/>

  <!-- 5 Categories listed at bottom -->
  <g transform="translate(160, 505)" font-family="'Noto Serif Bengali', serif" font-size="20" font-weight="500" fill="#78716C">
    <text x="0" y="0">চিন্তা</text>
    <text x="70" y="0" fill="#D6D3D1">·</text>
    <text x="105" y="0">পাঠালাপ</text>
    <text x="205" y="0" fill="#D6D3D1">·</text>
    <text x="240" y="0">ইতিহাস</text>
    <text x="330" y="0" fill="#D6D3D1">·</text>
    <text x="365" y="0">বই-আলোচনা</text>
    <text x="510" y="0" fill="#D6D3D1">·</text>
    <text x="545" y="0">অনুবাদ</text>
  </g>

  <!-- Website Domain Watermark -->
  <text x="1080" y="505" font-family="'Inter', sans-serif" font-size="18" font-weight="500" fill="#A8A29E" text-anchor="end">
    affanlabib.me
  </text>
</svg>
`;

async function generate() {
  console.log('Generating 1200x630 Open Graph cover image...');
  await sharp(Buffer.from(ogSvg))
    .jpeg({ quality: 90 })
    .toFile(path.resolve(imagesDir, 'og-default.jpg'));
  console.log('Generated public/images/og-default.jpg successfully!');
}

generate().catch(console.error);
