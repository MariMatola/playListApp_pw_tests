# playListApp_pw_tests

This project implements test coverage for the Playlist App functionality using Playwright. 

#Tech Stack:

- **Testing Framework:** Playwright
- **Language:** JavaScript
- **Test Coverage:** Functional UI testing for the app’s core features

# Test coverage

- Customer:
  - Account Operations
  - Logout
  - Transactions
- Manager:
  - Bank manager login
  - Adding new customer
  - Adding new account for the customer
  - Deleting a customer
  - Searching a customer

# How to run the tests

## Install project
```bash
npm i
npx playwright install
```
 ## Run tests in UI mode
```bash
npx playwright test --ui
```
 ## Run tests in debug mode
```bash
npx playwright test --debug
```
 ## Run tests in headless mode
```bash
npx playwright test
```
 ## Generate report for headless run
```bash
npx playwright show-report
```
