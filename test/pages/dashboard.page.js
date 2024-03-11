const Page = require('./page')

class dashboardPage {
    get dashboardPageUrl(){
        return 'https://kasirdemo.belajarqa.com/dashboard'
    }
    get buttonKategori (){
        return $('/html/body/div[1]/div/div/div[1]/div/a[5]');

    }
    get buttonPengguna (){
        return $('/html/body/div[1]/div/div/div[1]/div/a[7]');

    }
    async assertDashboardUrl () {
        await expect(browser).toHaveUrl(this.dashboardPageUrl)
        
    }
    async clickButtonKategori(){
        await this.buttonKategori.click();
    }
    async clickButtonPengguna(){
        await this.buttonPengguna.click();
    }
}

module.exports = new dashboardPage();