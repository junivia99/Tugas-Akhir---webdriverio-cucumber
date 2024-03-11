const Page = require('./page')

class userPage {
    get UserPageUrl(){
        return 'https://kasirdemo.belajarqa.com/users'
    }
    get buttonTambah (){
        return $('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/a');

    }
    get successMessage() {
        return $('/html/body/div[2]/ul[3]/li/div/div/div/div[2]')
    }


    async assertUserUrl () {
        await expect(browser).toHaveUrl(this.UserPageUrl)
        
    }
    async assertsuccessMessage() {
        await expect(this.successMessage).toHaveText('item ditambahkan')
        
    }
    async clickButtonTambah(){
        await this.buttonTambah.click();
    }
}

module.exports = new userPage();