const { test, expect } = require('@playwright/test');
test.describe('Login Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationteststore.com/');
    await expect(page).toHaveTitle('A place to practice your automation skills!');
    await expect(page.locator('#customer_menu_top')).toHaveText('Login or register');
    await page.locator('#customer_menu_top').click();
  });

test('Login with valid creditentials', async ({ page }) => {
  await (await page.waitForSelector('#loginFrm_loginname')).fill('test_user_wsb');
  await (await page.waitForSelector('#loginFrm_password')).fill('test_pass_wsb');
  await (await page.waitForSelector('[title="Login"]')).click()
  await expect(page).toHaveURL(/account/)
  });

test('Login with invalid creditentials', async ({ page }) => {
  await (await page.waitForSelector('#loginFrm_loginname')).fill('fail');
  await (await page.waitForSelector('#loginFrm_password')).fill('fail');
  await (await page.waitForSelector('[title="Login"]')).click()
  await (await page.waitForSelector('.alert-danger')).textContent("Incorrect login or password provided")
  });
});