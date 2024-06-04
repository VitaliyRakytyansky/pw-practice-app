import { test, expect } from "@playwright/test";
import { PageManager } from "../page-objects/page-manager";
import { faker } from "@faker-js/faker";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Navigate to form page", async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutsPage();
  await pm.navigateTo().datePickerPage();
  await pm.navigateTo().smartTablePage();
  await pm.navigateTo().toastrPage();
  await pm.navigateTo().tooltipPage();
});

test("Parametrized test", async ({ page }) => {
  const pm = new PageManager(page);
  const randomFullName = faker.name.fullName();
  const randomEmail = `${randomFullName.replace(" ", "")}${faker.datatype.number(
    1000
  )}@test.com`;

  await pm.navigateTo().formLayoutsPage();
  await pm
    .onFormLaoutsPage()
    .submitUsingGridFormWithCredsAndSelectOption(
      "test@test.com",
      "123",
      "Option 2"
    );
  await pm
    .onFormLaoutsPage()
    .submitInlineFormWithNameEmailAndCheckbox(
      randomFullName,
      randomEmail,
      true
    );

  // await pm.navigateTo().datePickerPage();
  // await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(5);
  // await pm.onDatePickerPage().selectDatePickerWithRangeFromToday(6, 15);
});
