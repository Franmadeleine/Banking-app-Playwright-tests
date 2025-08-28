import { test, expect } from '@playwright/test';

test('Assert correct customer Logout', async ({ page }) => {
  /* 
  Test:
  1. Open Wizard bank link
    https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login 
  2. Click [Customer Login]
  3. Select Neville Longbottom
  4. Click [Login]
  5. Click [Logout]
  6. Wait for the page URL
    https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer
  7. Assert the drop-down is present with empty value 
  */

  // 1. Acessa a página de login
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

  // 2. Clica no botão "Customer Login"
  await page.getByRole('button', { name: 'Customer Login' }).click();

  // 3. Aguarda o dropdown aparecer
  const customerDropdown = page.locator('.form-control');
  await expect(customerDropdown).toBeVisible();

  // 4. Seleciona o cliente
  await customerDropdown.selectOption({ label: 'Neville Longbottom' });

  // 5. Clica no botão "Login"
  await page.getByRole('button', { name: 'Login' }).click();

  // 6. Clica no botão "Logout"
  await page.getByRole('button', { name: 'Logout' }).click();

  // 7. Aguarda a URL correta após logout
  await expect(page).toHaveURL('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');

  // 8. Verifica se o dropdown está visível e sem cliente selecionado
  const postLogoutDropdown = page.locator('.form-control');
  await expect(postLogoutDropdown).toBeVisible();

 const selectedOption = postLogoutDropdown.locator('option:checked');
const selectedValue = await selectedOption.getAttribute('value');
expect(selectedValue).toBe('');
});
