//import the pw moduel
import { test, expect } from "@playwright/test";
//write the test
test("Capture screenshots in playwright", async ({ page }) => {
  //go to the URL
  await page.goto("https://www.youtube.com/@testerstalk");
  //search for the keywords

  //capture the element screenshots
  await page.locator('#page-header-container').screenshot({path:'./screenshots/ElementScreenshots.png'})
  //page screenshot
  await page.screenshot({path:'./screenshots/PageScreenshots.png'})
  //full page
  await page.screenshot({path:'./screenshots/FULL_PageScreenshots.png', fullPage: true})

});
