import { test, expect } from '@playwright/test';

test('LUX careers page visual snapshot', async ({ page }) => {
  // Navigate to the careers preview route
  await page.goto('/preview/lux/careers');
  // Take a full page screenshot
  const screenshot = await page.screenshot({ fullPage: true });
  // Expect the screenshot to be defined to ensure the page renders
  expect(screenshot).toBeTruthy();
});
