//import the pw moduel
import {test,expect} from '@playwright/test'

//write the test
test.describe('SMOKE group',()=>{
    test('test1',{tag:['@smoketesting']}, async({page})=>{
        //go to the URL
        await page.goto(`${process.env.GOOGLE_URL}`);
        
        // await page.pause();
        })    
})


// test.describe('REGRESSION GROUP', ()=>{
//     test('test2',{tag:['@regresiontesting']}, async({page})=>{
//         //go to the URL
//         await page.goto('https://www.yahoo.com/');
        
//         // await page.pause();
//         }) 

// })
// test('test3',{tag:['@smoketesting']}, async({page})=>{
// //go to the URL
// await page.goto('https://www.google.com/');

// // await page.pause();
// })

// test('test4',{tag:['@smoketesting','@regressiontesting']}, async({page})=>{
//     //go to the URL
//     await page.goto('https://www.facebook.com/');
    
//     // await page.pause();
//     })

// test('test5 MUST FAIL',{tag:['@regresiontesting']}, async({page})=>{
//         //go to the URL
//         await page.goto('https://www.yahoo.com/');
//         expect(true).toBe(false);        
//         // await page.pause();
//         })