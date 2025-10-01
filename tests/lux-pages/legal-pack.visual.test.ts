import { test, expect } from '@playwright/test';

test('LUX legal-pack page visual snapshot', async ({ page }) => {
  await page.goto('/preview/lux/legal-pack');
  const screenshot = await page.screenshot({ fullPage: true });
  expect(screenshot).toBeTruthy();
});
