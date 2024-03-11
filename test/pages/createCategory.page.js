const Page = require('./page')

class createCategory {
    get createCategoryPageUrl(){
        return 'https://kasirdemo.belajarqa.com/categories/create'
    }
    get name (){
        return $('//*[@id="nama"]');

    }
    get description (){
        return $('//*[@id="deskripsi"]');

    }
    get buttonSimpan (){
        return $('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/button');

    }
    get errorMessage (){
        return $('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]');

    }

    async assertCreateCategoryUrl () {
        await expect(browser).toHaveUrl(this.createCategoryPageUrl)
    }

    async simpanCategory(name,description){
        await this.name.setValue(name);
        await this.description.setValue(description);
        await this.buttonSimpan.click();
    }
    async asserterrorMessage() {
        await expect(this.errorMessage).toBeDisplayed()
        
    }
}

module.exports = new createCategory();