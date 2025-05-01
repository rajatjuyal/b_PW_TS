//import the pw moduel
import {test,expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log(`running inside the BEFOREALL`)
})

test.afterAll(async()=>{
    console.log(`running inside the AFTERALL`)
})
//write the test
test('My first PW TS test', async({page})=>{
//go to the URL
await page.goto('https://www.google.com')
//search for the keywords
await page.getByLabel('Search',{exact: true}).fill('playwright by testers talk');
await page.getByLabel('Search',{exact: true}).press('Enter');
//click on the playlist
// await page.getByRole('link',{ name:'Playwright by Testers Talk'}).first().click();
await page.getByRole('link', { name: 'Playwright by Testers Talk☑️ YouTube · Testers Talk 23.8K+ followers' }).click();

//validate the page title
await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - YouTube')

})

test('My SECOND PW TS test', async({page})=>{
    //go to the URL
    await page.goto('https://www.google.com')
    //search for the keywords
    await page.getByLabel('Search',{exact: true}).fill('playwright by testers talk');
    await page.getByLabel('Search',{exact: true}).press('Enter');
    //click on the playlist
    // await page.getByRole('link',{ name:'Playwright by Testers Talk'}).first().click();
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️ YouTube · Testers Talk 23.8K+ followers' }).click();
    
    //validate the page title
    await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - YouTube')
    
    })
