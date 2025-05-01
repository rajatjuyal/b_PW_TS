//import the pw moduel
import {test,expect} from '@playwright/test'

//write the test
test('selecting date values in PW', async({page})=>{
//go to the URL
await page.goto('https://jqueryui.com/datepicker/');

const iframe  = page.frameLocator('[class="demo-frame"]');
await iframe.locator('[id="datepicker"]').fill('12/15/2024');
await iframe.locator('[id="datepicker"]').click();
await iframe.locator('.ui-datepicker-today').click();
await page.pause();
})