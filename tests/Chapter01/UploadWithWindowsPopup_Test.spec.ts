//

import { chromium, expect, test } from '@playwright/test';
const filepath0 = './videos/b.webm';
const filepath1 = './videos/a.webm';

test('upload file test', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/upload');

  page.on('filechooser',async(filechooser)=>{
    await filechooser.setFiles([filepath0,filepath1]);
  })

  await page.locator("//div[@id='drag-drop-upload']").click();
    // await page.setInputFiles("input[type='file']",[filepath0,filepath1])
    page.pause();
  
})
