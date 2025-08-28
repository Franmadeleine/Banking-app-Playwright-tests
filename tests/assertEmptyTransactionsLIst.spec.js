import { test, expect } from '@playwright/test';

test('Assert the empty transactions list has correct values', async ({ page }) => {
  // 1. Acessa a página de login direto do cliente
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer');

  // 2. Seleciona "Albus Dumbledore"
  await page.getByRole('combobox').selectOption({ label: 'Albus Dumbledore' });

  // 3. Clica em [Login]
  await page.getByRole('button', { name: 'Login' }).click();

  // 4. Clica em [Transactions]
  await page.getByRole('button', { name: 'Transactions' }).click();

  // 5. Aguarda a tabela de transações aparecer
  const transactionsTable = page.locator('table.table-bordered');
  await expect(transactionsTable).toBeVisible({ timeout: 10000 });

  // 6. Verifica os cabeçalhos da tabela (dentro de <td><a>)
  const headers = transactionsTable.locator('thead tr td a');
  await expect(headers.nth(0)).toHaveText(/Date-Time/i);
  await expect(headers.nth(1)).toHaveText(/Amount/i);
  await expect(headers.nth(2)).toHaveText(/Transaction Type/i);

  // 7. Verifica se a tabela está vazia (sem transações)
  const rows = transactionsTable.locator('tbody tr');
  await expect(rows).toHaveCount(0);
});
