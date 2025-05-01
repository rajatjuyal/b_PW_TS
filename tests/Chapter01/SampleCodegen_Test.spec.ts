import {chromium, expect, test} from '@playwright/test';

test('testnamesomething',async()=>{
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext({
        recordVideo:{
            dir:"./videos/"
        }
    })
    const page = await context.newPage();
    (await page).goto('https://www.github.com');
    // await expect((await page).getByTitle).toBe('Github')
    const email_Id_filed = await page.$('#hero_user_email1');
    email_Id_filed?.fill('something@something.com');
    
    page.pause();

    await expect(page.getByRole('button', { name: 'Sign up for GitHub' }).first()).toBeVisible();

})