//import the pw moduel
import {test,expect} from '@playwright/test'

//write the test
test('Mouse actions', async({page})=>{
//go to the URL
await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');

// await page.getByRole('link',{name: 'Playwright by Testers Talk☑️'}).first().click({button: 'left'});
// await page.getByRole('link',{name: 'Playwright by Testers Talk☑️'}).first().click({button: 'right'});
// await page.getByLabel('Search by voice').hover();
await page.getByLabel('Search by voice').dblclick({timeout:5000});

})