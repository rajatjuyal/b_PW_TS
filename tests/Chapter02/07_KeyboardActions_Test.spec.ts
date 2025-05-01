//import the pw moduel
import {test,expect} from '@playwright/test'

//write the test
test('Keyboard actions', async({page})=>{
//go to the URL
await page.goto('https://www.google.com/');

await page.getByLabel('Search',{exact: true}).first().click();
await page.getByLabel('Search',{exact: true}).first().fill('playwright by testers talk');
await page.getByLabel('Search',{exact: true}).first().press('Enter');

await page.getByLabel('Search',{exact: true}).first().click();
await page.keyboard.press('Control+A');
await page.keyboard.press('Delete');

})