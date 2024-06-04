import { Page } from "@playwright/test";
import { time } from "console";

export class HelperBase {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForNumberOfSeconds(timeOfSeconds: number) {
    await this.page.waitForTimeout(timeOfSeconds * 1000);
  }
}
