//import the pw moduel
import {test,expect} from '@playwright/test'

//write the test
test('Handling iframes drag and drop', async({page})=>{
//go to the URL
await page.goto('https://jqueryui.com/droppable/');
//drag and drop element
const iframe = page.frameLocator('[class="demo-frame"]');

const dragElement =  iframe.locator('[id=draggable]');
const dropElement = iframe.locator('[id=droppable]');
await dragElement.dragTo(dropElement);

})