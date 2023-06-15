// test suite name
describe('Tutorialspoint application', function(){
    //test case
    it('Invisible Element', function(){    
       // launch url
       browser.url('https://www.amazon.com/')  
       //identify element then hover mouse
       const e = $("#nav-link-accountList")
       e.moveTo()
       browser.pause(2000)
       //click on hidden element
       $('=Sign in').click()
       //get page title
       console.log(browser.getTitle() + ' - Page title after click')

    browser.pause(8000);
    });
 });