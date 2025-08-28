import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
test('Assert the customer cannot withdraw money with empty balance', async ({ page }) => {
  const amount = faker.number.int({ min: 1, max: 100 }).toString();

  // 1. Acessa a página de login direto do cliente
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');

  // 2. Seleciona "Ron Weasly"
  await page.getByRole('combobox').selectOption({ label: 'Ron Weasly' });

  // 3. Clica em [Login]
  await page.getByRole('button', { name: 'Login' }).click();

  // 4. Verifica se o saldo é 0
  const balanceText = await page.locator('div.center strong').nth(1).textContent();
  expect(balanceText.trim()).toBe('0');

  // 5. Clica na aba [Withdrawl]
  await page.getByRole('button', { name: 'Withdrawl' }).click();

  // 6. Preenche o valor a ser sacado
  await page.getByPlaceholder('amount').fill(amount);

  // 7. Clica no botão [Withdraw]
  await page.getByRole('form').getByRole('button', { name: 'Withdraw' }).click();

  // 8. Verifica se a mensagem de erro aparece
  const errorMessage = page.locator('.error');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText(
    'Transaction Failed. You can not withdraw amount more than the balance.'
  );
});
