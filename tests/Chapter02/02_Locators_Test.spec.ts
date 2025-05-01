//import the pw moduel
import { test, expect } from "@playwright/test";
//write the test
test("Locators in playwright", async ({ page }) => {
  //go to the URL
  await page.goto("https://github.com/BakkappaN");
  
//   await page.getByRole('link',{name: 'Sign in'}).click();
  // await page.getByLabel('Homepage',{exact: true}).first().click();
  // await page.getByAltText("View BakkappaN's full-sized avatar").click();
  // await page.getByTestId('i1repositories-tab').click();
  await page.getByText("Sign up").click();
});
