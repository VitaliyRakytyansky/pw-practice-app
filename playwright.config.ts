import { defineConfig, devices } from "@playwright/test";
import { PageManager } from "../page-objects/page-manager";

require("dotenv").config();

export default defineConfig({
  fullyParallel: true,

  retries: 1,

  workers: process.env.CI ? 1 : undefined,

  reporter: "html",

  use: {
    baseURL: "http://localhost:4200/",
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
    },

    {
      name: "firefox",
      use: { browserName: "firefox" },
    },
  ],
});
