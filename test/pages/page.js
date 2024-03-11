class Page {
    open(){
        return browser.url('https://kasirdemo.belajarqa.com/')

    }
}

module.exports = new Page();