# 🧪 Banking App Playwright Tests

Automated end-to-end tests for the fictional **Wizard Bank** application using [Playwright](https://playwright.dev/). This project simulates customer interactions such as login, withdrawal, deposit, and transaction validation.

## 📦 Technologies Used

- [Playwright](https://playwright.dev/)
- [Node.js](https://nodejs.org/)
- [Faker.js](https://fakerjs.dev/) – for generating random test data

## 🚀 How to Run the Tests

1. Clone the repository:
   ```bash
   git clone https://github.com/Franmadeleine/Banking-app-Playwright-tests.git
   cd Banking-app-Playwright-tests
   
Install dependencies:
npm install

Run the tests:
npx playwright test

   ✅ Test Coverage
✔️ Customer login

✔️ Balance validation

✔️ Withdrawal with insufficient funds

✔️ Deposit flow

✔️ Transaction history

✔️ Error message validation

📂 Folder Structure
tests/
├── login.spec.js
├── withdrawal.spec.js
├── deposit.spec.js
└── transactions.spec.js


