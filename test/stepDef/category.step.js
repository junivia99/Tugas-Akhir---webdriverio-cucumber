const { Given,When,Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/login.page");
const loginPage = require("../pages/login.page");
const dashboardPage = require("../pages/dashboard.page");
const categoryPage = require("../pages/category.page");
const createCategoryPage = require("../pages/createCategory.page");

Given(/^I open KasirAja website$/, async () =>{
    await browser.url('https://kasirdemo.belajarqa.com/');
})
When(/^I login with valid credential$/, async () =>{
    await loginPage.login('alherani99@gmail.com','junivia'); 
})
Then(/^I should be on the dashboard page$/, async () =>{
    await dashboardPage.assertDashboardUrl();
})

Given(/^I open menu category$/, async () =>{
    await dashboardPage.clickButtonKategori();
    await categoryPage.assertCategoryUrl();
})
When(/^Click button tambah$/, async () =>{
    await categoryPage.clickButtonTambah();
    await createCategoryPage.assertCreateCategoryUrl();
})
When(/^Input name and description$/, async () =>{
    await createCategoryPage.simpanCategory('susu','susu bubuk');
})
Then(/^I should be on the category page and success add category$/, async () =>{
    await categoryPage.assertsuccessMessage();
    await categoryPage.assertCategoryUrl();
})
Then(/^There are error message name can not empty$/, async () =>{
    await createCategoryPage.asserterrorMessage();
})