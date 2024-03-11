const { Given,When,Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/login.page");
const loginPage = require("../pages/login.page");
const dashboardPage = require("../pages/dashboard.page");
const userPage = require("../pages/user.page");
const createUserPage = require("../pages/createUser.page");


Given(/^I open KasirAja website$/, async () =>{
    await browser.url('https://kasirdemo.belajarqa.com/');
})
When(/^I login with valid credential$/, async () =>{
    await loginPage.login('alherani99@gmail.com','junivia'); 
})
Then(/^I should be on the dashboard page$/, async () =>{
    await dashboardPage.assertDashboardUrl();
})

Given(/^I open menu pengguna$/, async () =>{
    await dashboardPage.clickButtonPengguna();
    await userPage.assertUserUrl();
})
When(/^Click button tambah$/, async () =>{
    await userPage.clickButtonTambah();
    await createUserPage.assertCreateUserUrl();
})
When(/^Input name,email and password$/, async () =>{
    await createUserPage.simpanUser('kiki','kiki@gmail.com','kiki');
})
Then(/^I should be on the user page and success add user$/, async () =>{
    await userPage.assertsuccessMessage();
    await userPage.assertUserUrl();
})
Then(/^There are error message name can not empty$/, async () =>{
    await createUserPage.asserterrorMessage();
})