import { test } from "../test-options";
import { PageManager } from "../page-objects/page-manager";
import { faker } from "@faker-js/faker";

test("Parametrized test", async ({ pageManager }) => {
  const randomFullName = faker.name.fullName();
  const randomEmail = `${randomFullName.replace(
    " ",
    ""
  )}${faker.datatype.number(1000)}@test.com`;

  await pageManager
    .onFormLaoutsPage()
    .submitUsingGridFormWithCredsAndSelectOption(
      "test@test.com",
      "123",
      "Option 2"
    );
  await pageManager
    .onFormLaoutsPage()
    .submitInlineFormWithNameEmailAndCheckbox(
      randomFullName,
      randomEmail,
      true
    );
});
