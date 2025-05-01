import { chromium, expect, test } from '@playwright/test';
const filepath0 = './videos/b.webm';
const filepath1 = './videos/a.webm';

test('upload file test', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.sendgb.com');

  // Click the button or element that opens the file picker if needed
  // For example, if there's a button with text 'Add File(s)', click it
  // await page.click('text=Add File(s)');
    await page.setInputFiles("input[type='file']",[filepath0,filepath1])
    page.pause();
  // Locate the hidden file input element
//   const fileInput = await page.$('input[type="file"]');
//   if (!fileInput) {
//     throw new Error('File input element not found');
//   }

//   // Set the file to upload
//   await fileInput.setInputFiles(filepath0);
})
