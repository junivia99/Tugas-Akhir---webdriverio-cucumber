const { Given,When,Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/login.page");
const loginPage = require("../pages/login.page");
const dashboardPage = require("../pages/dashboard.page");

Given(/^I open KasirAja website$/, async () =>{
    await browser.url('https://kasirdemo.belajarqa.com/');
})
When(/^I login with valid credential$/, async () =>{
    await loginPage.login('alherani99@gmail.com','junivia'); 
})
Then(/^I should be on the dashboard page$/, async () =>{
    await dashboardPage.assertDashboardUrl();
})