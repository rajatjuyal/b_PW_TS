import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await test.step("Navigate to the URL", async () => {
    await page.goto("https://github.com/");
    await page.getByRole("link", { name: "Sign in" }).click();
  });

  await test.step("enter the username and password", async () => {
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .click();
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .fill("testersttalk");
    await page
      .getByRole("textbox", { name: "Username or email address" })
      .press("Tab");
    await page.getByRole("textbox", { name: "Password" }).fill("test123");
  });

  await test.step("clicking on the sign in button", async () => {
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
  });

  await test.step("veryfing the incorrect username and password message", async () => {
    await expect(page.getByRole("alert")).toContainText("Incorrect username or password.");
  });
});
