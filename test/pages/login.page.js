const Page = require('./page')

class LoginPage {
    get usernameInput (){
        return $('//*[@id="email"]');

    }
    get passwordInput (){
        return $('//*[@id="password"]');

    }
    get loginButton (){
        return $('//*[@id="root"]/div/div/div/div[2]/div/button');

    }

    async login(username,password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();