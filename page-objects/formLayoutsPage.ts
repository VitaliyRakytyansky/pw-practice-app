import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class FormLayoutsPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async submitUsingGridFormWithCredsAndSelectOption(
    email: string,
    password: string,
    optionText: string
  ) {
    const usingGridform = this.page.locator("nb-card", {
      hasText: "Using the Grid",
    });

    await usingGridform.getByRole("textbox", { name: "Email" }).fill(email);
    await usingGridform
      .getByRole("textbox", { name: "Password" })
      .fill(password);
    await usingGridform
      .getByRole("radio", { name: optionText })
      .check({ force: true });
    await usingGridform.getByRole("button").click();
  }

  async submitInlineFormWithNameEmailAndCheckbox(
    name: string,
    email: string,
    rememberMe: boolean
  ) {
    const inlineForm = this.page.locator("nb-card", {
      hasText: "Inline form",
    });
    await inlineForm.getByRole("textbox", { name: "Jane Doe" }).fill(name);
    await inlineForm.getByRole("textbox", { name: "Email" }).fill(email);
    await inlineForm.getByRole("checkbox").check({ force: rememberMe });
    await inlineForm.getByRole("button").click();
  }
}
