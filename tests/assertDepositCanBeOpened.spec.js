import { test, expect } from '@playwright/test';

test('Verificar se depósito pode ser aberto e registrado nas transações', async ({ page }) => {
  const amount = 100;

  // Acessa a página inicial
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

  // Login como Customer
  await page.getByRole('button', { name: 'Customer Login' }).click();
  await page.getByRole('combobox').selectOption({ label: 'Harry Potter' });
  await page.getByRole('button', { name: 'Login' }).click();

  // Clica em Deposit
  await page.getByRole('button', { name: 'Deposit' }).click();

  // Realiza o depósito
  await page.getByPlaceholder('amount').fill(String(amount));
  await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();

  // Verifica a mensagem de sucesso
  await expect(page.locator('.error')).toHaveText('Deposit Successful');

  // Vai para Transactions
  await page.getByRole('button', { name: 'Transactions' }).click();

  // Aguarda a tabela de transações aparecer
  const transactionsTable = page.locator('table.table');
  await expect(transactionsTable).toBeVisible();

  // Aguarda a primeira linha aparecer (até 10s)
  const firstRow = transactionsTable.locator('tbody tr').first();
  await firstRow.waitFor({ state: 'visible', timeout: 10000 });

  // Verifica se a primeira célula contém uma data válida
  const dateText = await firstRow.locator('td').nth(0).textContent();
  expect(new Date(dateText).toString()).not.toBe('Invalid Date');

  // Verifica valor do depósito
  await expect(firstRow.locator('td').nth(1)).toHaveText(String(amount));

  // Verifica tipo da transação
  await expect(firstRow.locator('td').nth(2)).toHaveText(/Credit/i);
});
