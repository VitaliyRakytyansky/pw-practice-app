import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.URL);
  await page.getByText("Button Triggering AJAX Request").click();
  await page.getByText("Form Layouts").click();
});

test("Auto waiting", async ({ page }) => {
  const successButton = page.locator(".bg-success");

  //   await successButton.click();
  //   const text = await successButton.textContent();

  //   await successButton.waitFor({ state: "attached" });
  //   const text = await successButton.allTextContents();
  //   expect(text).toContain("Data loaded with AJAX get request.");
  await expect(successButton).toHaveText("Data loaded with AJAX get request.", {
    timeout: 20000,
  });
});

test("Alternative auto waits", async ({ page }) => {
  const successButton = page.locator(".bg-success");

  //wait for element
  await page.waitForSelector(".bg-success");

  //wait for particular response
  await page.waitForResponse("https://uitestingplayground.com/ajaxdata  ");

  const text = await successButton.allTextContents();
  expect(text).toContain("Data loaded with AJAX get request.");
});
