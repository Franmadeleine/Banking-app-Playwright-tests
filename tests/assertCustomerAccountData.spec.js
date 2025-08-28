import { test, expect } from '@playwright/test';

test('Assert customer has correct bank data', async ({ page }) => {
  /* 
  Test:
  1. Open Wizard bank link 
    https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer
  2. Select Hermoine Granger
  3. Click [Login]
  4. Assert Account Number in Dropdown next to the Hermoine Granger name
  5. Assert Account Number text
  5. Assert Balance text
  6. Assert Currency text
  */

  // 1. Open Wizard bank link
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');

  // 2. Select Hermoine Granger
  await page.locator('.form-control').selectOption({ label: 'Hermoine Granger' });

  // 3. Click [Login]
  await page.getByRole('button', { name: 'Login' }).click();

  // 4. Assert Account Number in Dropdown next to the Hermoine Granger name
  const selectedOption = page.locator('select[ng-model="accountNo"] >> option:checked');
  const accountNumber = await selectedOption.textContent();
  expect(accountNumber.trim()).toBe('1001');

  // 5. Assert Account Number text
  const accountNumberText = await page.getByText('Account Number :');
  await expect(accountNumberText).toBeVisible();

  // 6. Assert Balance text
  const balanceText = await page.getByText('Balance :');
  await expect(balanceText).toBeVisible();

  // 7. Assert Currency text
  const currencyText = await page.getByText('Currency :');
  await expect(currencyText).toBeVisible();
});
