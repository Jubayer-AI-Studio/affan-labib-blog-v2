// src/utils/helpers.ts

export function toBengaliNumber(num: number | string): string {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num
    .toString()
    .replace(/[0-9]/g, (digit) => bnDigits[parseInt(digit, 10)]);
}

export function calculateReadingTime(content: string): string {
  // Average reading speed: 180 words per minute for Bengali
  const cleanText = content.replace(/<[^>]*>?/gm, '').trim();
  const wordCount = cleanText.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 180));
  return `${toBengaliNumber(minutes)} মিনিটে পাঠ্য`;
}

export function formatBengaliDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    const months = [
      'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
      'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
    ];
    const day = toBengaliNumber(d.getDate());
    const month = months[d.getMonth()];
    const year = toBengaliNumber(d.getFullYear());
    return `${day} ${month}, ${year}`;
  } catch {
    return dateStr;
  }
}

export const CATEGORY_MAP: Record<string, { label: string; slug: string; desc: string }> = {
  'chinta': {
    label: 'চিন্তা',
    slug: 'chinta',
    desc: 'সরল চিন্তা, জীবনবোধ ও দৈনন্দিন ভাবনা।',
  },
  'pathalap': {
    label: 'পাঠালাপ',
    slug: 'pathalap',
    desc: 'পড়তে পড়তে মনে জেগে ওঠা জিজ্ঞাসা, অনুভূতি ও ভাবনা।',
  },
  'itihas': {
    label: 'ইতিহাস',
    slug: 'itihas',
    desc: 'ইতিহাসের আলো-আঁধারি, তথ্য ও অনুসন্ধানী পাঠ।',
  },
  'boi-alochona': {
    label: 'বই-আলোচনা',
    slug: 'boi-alochona',
    desc: 'পঠিত বইয়ের ব্যক্তিগত মূল্যায়ন ও অনুভূতি।',
  },
  'onubad': {
    label: 'অনুবাদ',
    slug: 'onubad',
    desc: 'আরবি ও আন্তর্জাতিক চিন্তামূলক রচনার ভাবানুবাদ।',
  },
};
