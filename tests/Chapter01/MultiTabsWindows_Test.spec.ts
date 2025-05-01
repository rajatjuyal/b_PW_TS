import { chromium, expect, test } from '@playwright/test';

test.skip('upload file test', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://letcode.in/window');
  const [newWindow] = await Promise.all([
    context.waitForEvent("page"),
    await page.click("#home")
  ])
  await newWindow.waitForLoadState()
  await expect(newWindow.url()).toContain("test")
  await newWindow.click("//a[normalize-space()='Click']");
  await expect(newWindow.url()).toContain("button");
  await page.bringToFront();
  await page.locator("//a[normalize-space()='Work-Space']").click();
  // Click the button or element that opens the file picker if needed
  // For example, if there's a button with text 'Add File(s)', click it
  // await page.click('text=Add File(s)');
    // await page.setInputFiles("input[type='file']",[filepath0,filepath1])
    page.pause();

})

test('Multiple windows at once', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://letcode.in/window');
    const [multipage] = await Promise.all([
      context.waitForEvent("page"),
      await page.click("#multi")
    ])
    await multipage.waitForLoadState();
    const pages = multipage.context().pages();
    console.log(pages.length);

    pages.forEach(page=>{
        console.log(page.url())
    })
    
    pages[1].on('dialog',(dialog)=>{
        console.log(dialog.message)
        dialog.accept();
    })
    pages[1].bringToFront();
    await pages[1].locator("id=accept").click();

    // Click the button or element that opens the file picker if needed
    // For example, if there's a button with text 'Add File(s)', click it
    // await page.click('text=Add File(s)');
      // await page.setInputFiles("input[type='file']",[filepath0,filepath1])
      page.pause();
  
  })
  