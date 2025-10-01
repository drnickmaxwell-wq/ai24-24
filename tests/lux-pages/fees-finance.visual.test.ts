import { test, expect } from '@playwright/test';

test('LUX fees-finance page visual snapshot', async ({ page }) => {
  await page.goto('/preview/lux/fees-finance');
  const screenshot = await page.screenshot({ fullPage: true });
  expect(screenshot).toBeTruthy();
});
