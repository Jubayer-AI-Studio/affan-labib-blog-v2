// scripts/inspect-ref.js
import fs from 'node:fs';

async function main() {
  const res = await fetch('https://bengali-personal-blo-17ro.bolt.host/assets/index-BKNeZoDx.js');
  const js = await res.text();

  const cssRes = await fetch('https://bengali-personal-blo-17ro.bolt.host/assets/index-BXtleyGj.css');
  const css = await cssRes.text();

  console.log('--- CSS Key Colors & Variables ---');
  const colors = css.match(/--[\w-]+:\s*[^;]+/g) || [];
  console.log(colors.slice(0, 30));

  console.log('--- Home Layout Analysis ---');
  // Look for sections
  const sections = [];
  if (js.includes('hero')) sections.push('Hero');
  if (js.includes('featured')) sections.push('Featured Post');
  if (js.includes('pinned')) sections.push('Pinned Post');
  if (js.includes('categories')) sections.push('Categories Filter / Grid');
  if (js.includes('recent')) sections.push('Recent Posts Grid');
  if (js.includes('newsletter')) sections.push('Newsletter');
  if (js.includes('quote')) sections.push('Featured Quote');

  console.log('Sections found:', sections);

  // Look for image change / upload or author card logic
  const imgLogic = js.match(/avatar|profile|image|upload/gi) || [];
  console.log('Image occurrences:', imgLogic.length);

  // Check what components are rendered in the homepage
  // Let's find strings like 'সর্বশেষ', 'জনপ্রিয়', 'পঠিত'
  const banglaKeywords = ['সর্বশেষ', 'জনপ্রিয়', 'পঠিত', 'মন্তব্য', 'শেয়ার', 'অনুসন্ধান', 'ফিল্টার', 'বিষয়', 'লেখক'];
  for (const kw of banglaKeywords) {
    if (js.includes(kw)) {
      console.log('Found keyword:', kw);
    }
  }
}

main().catch(console.error);
