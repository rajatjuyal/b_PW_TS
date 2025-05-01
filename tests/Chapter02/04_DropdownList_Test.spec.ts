//import the pw moduel
import {test,expect} from '@playwright/test'

//write the test
test('My first PW TS test', async({page})=>{
//go to the URL
await page.goto('https://www.facebook.com');
await page.getByRole('button',{name: 'Create new account'}).click();
// await page.getByLabel('Month').selectOption('3');
const monthDropdown = await page.locator('#month');
const valuetoSelect = 'May'
await monthDropdown.selectOption(valuetoSelect);
// const selectedValue = await monthDropdown.inputValue();
// const selectedValue = await page.locator(`#month > option[value="${valuetoSelect}"]`).textContent();
const selectedValue = await page.locator(`//*[@id='month']/option[text()='${valuetoSelect}']`).textContent();
//*[@id='month']/option[text()='Mar']
// const selectedValue = await monthDropdown.textContent();
//  const selectedValue = await page.$eval<string, HTMLSelectElement>("#month",ele=> ele.value);
console.log(`selectedValue is ${selectedValue}`);
await expect('May').toBe(selectedValue);
// await expect(page.locator('#month>option')).toBe(page.locator('#month>option').inputValue());
// await expect(page.locator('#month>option')).toHaveText(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);

})