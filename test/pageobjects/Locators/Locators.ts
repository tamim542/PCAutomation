class LocatorHome {
  get clickGetStarted() {
    return $("//header/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
  }

  get crossButton() {
    return $("//body/div[3]/div[4]/div[1]/section[1]/button[1]/*[1]");
  }


  get arrowRightSignClick() {
    return $("//body/div[@id='__next']/main[1]/section[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]");
  }

  get arrowLeftSignClick() {
    return $("//body/div[@id='__next']/main[1]/section[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]");
  }

  /* -----------------------------------------------------------------
      
         ------------- Explore Cloud sction ----------------

   ----------------------------------------------------------------- */

  get pageBuilder() {
    return $("//span[contains(text(),'Page Builder')]");
  }

  get preBuiltTemplate() {
    return $("//span[contains(text(),'Prebuilt Template')]");
  }

  get customDomain() {
    return $("//span[contains(text(),'Custom Domain')]");
  }

  get bloggingPlatform() {
    return $("//span[contains(text(),'Blogging Platform')]");
  }

  get advancedSEO() {
    return $("//span[contains(text(),'Advanced SEO')]");
  }


  /* -----------------------------------------------------------------
      
       ------------- Forget worries About coding ----------------

  ----------------------------------------------------------------- */

  get takeATourFor1year() {
    return $('//*[@id="__next"]/main/section[4]/div/div/div[1]/div[1]/div/a');
  }

  /* -----------------------------------------------------------------
      
       ------------- Leave Your Footprint Everywhere ----------------

  ----------------------------------------------------------------- */

  get videoPlay() {
    return $('//button[@class="btn btn-play font-sm-bold popup-youtube hover-up"]');
  }

  get crossSignClick() {
    return $('//button[@class="modal-video-close-btn"]');
  }

  /* -----------------------------------------------------------------
      
       ------------- Frequently asked questions ----------------

  ----------------------------------------------------------------- */

  get elementOne() {
    return $("//button[contains(text(),'Which is the quickest and easiest website builder?')]");
  }
  // get elementTwo(){
  //     return $("//button[contains(text(),'Is Prolific Cloud right for me?')]");
  // }
  // get elementThree(){
  //     return $("//button[contains(text(),'How can I create a website with a custom domain?')]");
  // }
  // get elementFour(){
  //     return $("//button[contains(text(),'How do I start building a website?')]");
  // }
  // get elementFive(){
  //     return $("//button[contains(text(),'Will it offer to build a website without coding?')]");
  // }
  // get elementSix(){
  //     return $("//button[contains(text(),'What is the Prolific Cloud Page Builder?')]");
  // }


  /* -----------------------------------------------------------------
 
    ------------- Social icon hover effect check ----------------

   ----------------------------------------------------------------- */

  get twette() {
    return $("//body/div[@id='__next']/footer[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]");
  }
  get facebook() {
    return $("//body/div[@id='__next']/footer[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[2]");
  }
  get linkedIn() {
    return $("//body/div[@id='__next']/footer[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[3]");
  }
  get youtube() {
    return $("//body/div[@id='__next']/footer[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[4]");
  }


  //--------------------------------- Page [AT0004] registration with subscription --------------------------------

  get pricingPlan() {
    return $("//header/div[1]/div[1]/div[1]/div[2]/nav[1]/ul[1]/li[3]/a[1]");
  }



  /* -----------------------------------------------------------------
  
     ------------- registration new tab ----------------

    ----------------------------------------------------------------- */

  get ententerpriseYearlyer() {
    return $("//body/div[@id='__next']/main[1]/section[2]/div[1]/div[2]/div[2]/div[1]/div[2]/a[1]");
  }

  get name() {
    return $("//input[@id='field-5']");
  }
  get email() {
    return $("//input[@id='field-6']");
  }


  get website() {
    return $("//input[@id='field-7']");
  }
  get phoneNo() {
    return $("//body/div[3]/div[4]/div[1]/section[1]/div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/input[1]");
  }
  get password() {
    return $("//input[@id='field-9']");
  }
  get confirmPassword() {
    return $("//input[@id='field-10']");
  }

  get saveButtonReg() {
    return $("//input[@id='field-10']");
  }

  //---------------------------- signin website theme -----------------------------------------

  get favIcon() {
    return $('//button[@class="chakra-button css-bg02im"]');
  }
  get savefavIcon() {
    return $("//body/div[4]/div[4]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/form[1]/div[5]/button[1]");
  }

  get siteFontSelect() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/div[1]/div[1]/input[1]");
  }

  get siteFontSelectName() {
    return $("//div[contains(text(),'Abril Fatface')]");
  }
  get saveAllData() {
    return $("//button[contains(text(),'Save')]");
  }


  //--------------------------------- Page [AT0022] configuration  --------------------------------




  get configurationClick() {
    return $("//span[contains(text(),'Configuration')]");
  }

  /* -----------------------------------------------------------------
 
    ------------- chat config ----------------

   ----------------------------------------------------------------- */

  get chatConfig() {
    return $("//span[contains(text(),'Chat Config')]");
  }
  get selectTawakTO() {
    return $('//select[@class="chakra-select css-k7r2wc"]');
  }

  get whatsUpLink() {
    return $("//input[@id='field-217']");
  }

  get activeWhatsupClick() {
    return $('//span[@class="chakra-checkbox__control css-xxkadm"]');
  }
  get chatConfigSaveClick() {
    return $('//button[@class="chakra-button css-11b472s"]');
  }


  /* -----------------------------------------------------------------
 
    ------------- Google Analytics ----------------

   ----------------------------------------------------------------- */

  get googleAnalyticsClick() {
    return $("//span[contains(text(),'Google Analytics')]");
  }
  get googleAnalytics4MeasurementID() {
    return $('//input[@class="chakra-input css-jg9nx" and @name="ga4Code"]');
  }
  get googleTagManagerCode() {
    return $('//input[@class="chakra-input css-jg9nx" and @name="gtmCode"]');
  }

  get googleAnalytics4Active() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[1]/div[3]/div[1]/label[1]/span[1]");
  }

  get googleTagManagerActive() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[1]/div[4]/div[1]/label[1]/span[1]");
  }

  get googleAnalyticsSave() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[1]/div[4]/div[1]/label[1]/span[1]");
  }

  /* -----------------------------------------------------------------
  
     ------------- Mail Config ----------------

    ----------------------------------------------------------------- */
  get iframeSwitch() {
    return $('//div[@class="css-k008qs"]');
  }
  get mailConfigClick() {
    return $("//span[contains(text(),'Mail Config')]");
  }
  get mailConfigName() {
    return $('//input[@name="name" ]');
  }
  get sMTPServer() {
    return $('//input[@name="smtpHost" ]');
  }
  get sMTPPort() {
    return $('//input[@name="smtpPort" ]');
  }

  get selectConnectionSecurity() {
    return $('//select[@class="chakra-select css-k7r2wc"]');
  }

  get emailAddress() {
    return $('//input[@name="smtpUser" ]');
  }

  get passwordSet() {
    return $('//input[@name="smtpPass" ]');
  }

  get mailCOnfigSave() {
    return $("//button[contains(text(),'Save')]");
  }

  /* -----------------------------------------------------------------
  
     ------------- Google Search console  ----------------

    ----------------------------------------------------------------- */

  get googleSearchConsoleClick() {
    return $("//span[contains(text(),'Google search Console')]");
  }

  get contentField() {
    return $('//textarea[@name="content"]');
  }
  get gooogleSearchActive() {
    return $('//span[@class="chakra-checkbox__control css-xxkadm"]');
  }
  get googleSearchSave() {
    return $('//button[@class="chakra-button css-11b472s"]');
  }

  /* -----------------------------------------------------------------
 
  ------------- Google AdSense  ----------------

 ----------------------------------------------------------------- */

  get googleAdSenseClick() {
    return $("//span[contains(text(),'Google AdSense')]");
  }

  get googleAdSenseclientCode() {
    return $('//textarea[@class="chakra-textarea css-mlw6ie"]');
  }
  get googleAdSenseActive() {
    return $('//span[@class="chakra-checkbox__control css-xxkadm"]');
  }
  get googleAdSenseSAve() {
    return $('//button[@class="chakra-button css-11b472s"]');
  }

  /* -----------------------------------------------------------------
 
   -------------  pinterest verification ----------------

  ----------------------------------------------------------------- */

  get pinterestVerificationClick() {
    return $('//span[@class="title title2 css-0"]');
  }

  get pinterestVerificationContent() {
    return $('//textarea[@class="chakra-textarea css-mlw6ie"]');
  }
  get pinterestVerificationActive() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/label[2]/span[1]/div[1]");
  }
  get pinterestVerificationSave() {
    return $('//button[@class="chakra-button css-11b472s"]');
  }

  /* -----------------------------------------------------------------
 
  -------------  Integration ----------------

 ----------------------------------------------------------------- */

  get integrationClick() {
    return $('//span[@class="title title2 css-1xt4lt6"]');
  }

  get integrationInstall() {
    return $('//button[@class="chakra-button css-177z76w"]');
  }
  get integrationStoreUID() {
    return $('//input[@class="chakra-input css-13gwzxu" and @name="storeKey"]');
  }
  get integrationApiKey() {
    return $('//input[@name="apiKey"]');
  }
  get integrationSecretKey() {
    return $('//input[@name="secretKey"]');
  }
  get integrationSave() {
    return $('//button[@class="chakra-button css-jjyjf1"]');
  }

  //--------------------------------------- Page [AT0022] configuration  ------------------------------------------------------------

  get billingClick() {
    return $("//span[contains(text(),'Billing')]");
  }


  /* -----------------------------------------------------------------
 
       -------------  Card  ----------------

  ----------------------------------------------------------------- */

  get cardClick() {
    return $('//a[@href="/admin/card"]');
  }

  get createNewCard() {
    return $('//a[@class="chakra-link css-1krilld"]');
  }
  get cardHolderName() {
    return $('//input[@class="chakra-input css-jg9nx" and @name="name"]');
  }
  get cardEmail() {
    return $('//input[@class="chakra-input css-jg9nx" and @name="email"]');
  }


  get cardNumber() {
    return $('//input[@class="InputElement is-empty Input Input--empty" and @name="cardnumber"]');
  }
  get cardMonthYear() {
    return $('//input[@class="InputElement is-empty Input Input--empty" and @name="exp-date"]');
  }
  // get cardCVC(){
  //   return $('//input[@name="cvc"]');
  // }
  get cardSaveButton() {
    return $('//button[@class="chakra-button css-wgslge"]');
  }

  /* -----------------------------------------------------------------
 
       -------------  subscription  ----------------

  ----------------------------------------------------------------- */



  get subscriptionClick() {
    return $('//span[@class="title title2 css-1xt4lt6"]');
  }

  // get subscriptionEnterpriceYearly(){
  //   return $("//td[contains(text(),'Enterprise Yearly')]");
  // }
  // get subscriptionActive(){
  //   return $("//span[contains(text(),'active')]");
  // }
  // get subcriptionCancel(){
  //   return $("//td[contains(text(),'Enterprise Yearly')]");
  // }



  /* -----------------------------------------------------------------
 
       -------------  pricing  ----------------

  ----------------------------------------------------------------- */


  get billingClickForPricing() {
    return $("//span[contains(text(),'Billing')]");
  }

  get pricingClick() {
    return $("//span[contains(text(),'Pricing')]");
  }
  get upgradeMonthly() {
    return $("//button[contains(text(),'UPGRADE')]");
  }
  // get pricingName(){
  //   return $('//input[@name="name"]');
  // }
  // get pricingEmail(){
  //   return $('//input[@name="email"]');
  // }
  // get pricingPromoCode(){
  //   return $('//input[@name="promoCode"]');
  // }
  // get pricingverify(){
  //   return $('//button[@class="chakra-button css-dbnyzg"]');
  // }
  // get pricingCardNumber(){
  //   return $('//input[@autocomplete="cc-number"]');
  // }



  // ---------------------------------------------- Page [AT0007] Sites -----------------------------------------------

  get SitesClick() {
    return $("//span[contains(text(),'Sites')]");
  }

  /* -----------------------------------------------------------------
 
       -------------  Page  ----------------

  ----------------------------------------------------------------- */

  get pageClick() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[1]/ul[1]/div[1]/div[1]/li[2]/a[1]/div[1]/div[1]/span[1]");
  }
  get createNew() {
    return $("//a[contains(text(),'Create new')]");
  }
  get addSection() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[3]/div[1]/div[1]/button[1]/*[1]");
  }
  get singleSection() {
    return $("//body/div[6]/div[4]/div[1]/section[1]/div[1]/div[1]/div[3]/*[1]");
  }
  get icon() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/button[1]/*[1]");
  }
  get Heading() {
    return $("//textarea[contains(text(),'Heading text')]");
  }
  //----------------------------------drag and drop-------------------------------------
  get dragAble() {
    return $('//div[@data-rbd-drag-handle-draggable-id="paragraph"]');
  }
  get dropAble() {
    return $("//p[contains(text(),'Column')]");
  }




  /* -----------------------------------------------------------------
 
       -------------  Menu Set  ----------------

  ----------------------------------------------------------------- */

  get menuSetClick() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[1]/ul[1]/div[1]/div[1]/li[2]/a[2]/div[1]/div[1]/span[1]");
  }

  get leavePageConfirm() {
    return $("//button[contains(text(),'Confirm')]");
  }

  get createNewMenuSet() {
    return $("//a[@href='/admin/menuset/create']");
  }
  get nameMenuSet() {
    return $("//input[@name='name']");
  }
  get pageMenuSet() {
    return $("//div[contains(text(),'Pages')]");
  }
  get pageSelectMenuSet() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]");
  }
  get customLinkClickMenuSet() {
    return $("//div[contains(text(),'Custom Link')]");
  }
  get labelClickMenuSet() {
    return $("//input[@class='chakra-input css-jg9nx' and @placeholder='Label']");
  }
  get linkClickMenuSet() {
    return $("//input[@class='chakra-input css-jg9nx' and @placeholder='Link']");
  }
  get addMenuMenuSet() {
    return $("//button[contains(text(),'Add to menu')]");
  }

  /* -----------------------------------------------------------------
     
            -------------  Header Set  ----------------
 
       ----------------------------------------------------------------- */

  get headerSetClick() {
    return $("//span[contains(text(),'Header Set')]");
  }
  get createNewHeaderSet() {
    return $("//a[@href='/admin/builder/header/create']");
  }

  /* -----------------------------------------------------------------
 
      -------------  Footer Set  ----------------

 ----------------------------------------------------------------- */


  get footerClick() {
    return $("//span[contains(text(),'Footer Set')]");
  }

  get createNewFooter() {
    return $('//a[@href="/admin/builder/footer/create"]');
  }

  /* -----------------------------------------------------------------
 
       -------------  Media Library  ----------------

  ----------------------------------------------------------------- */


  get mediaLibraryClick() {
    return $("//span[contains(text(),'Media Library')]");
  }
  get imageUploadMediaLibraryClick() {
    return $("//label[contains(text(),'Click to Upload File')]");
  }
  get imgAdd() {
    return $('//input[@id="file"]');
  }
  get nameMediaLibrary() {
    return $('//input[@name="fileName"]');
  }
  get allTextMediaLibrary() {
    return $('//input[@name="altText"]');
  }
  get captionMediaLibrary() {
    return $('//input[@name="caption"]');
  }
  get textareaMediaLibrary() {
    return $('//textarea[@name="description"]');
  }
  get saveMediaLibrary() {
    return $('//button[@class="chakra-button css-qgd8zj"]');
  }
  // ---------------------------------------------- Page [AT0007] Blog -----------------------------------------------


  get blogClick() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[1]/ul[1]/div[1]/div[1]/li[3]/div[1]");
  }

  /* -----------------------------------------------------------------
 
       -------------  Author  ----------------

  ----------------------------------------------------------------- */

  get authorClick() {
    return $("//span[contains(text(),'Author')]");
  }
  get createNewAuthor() {
    return $('//a[@href="/admin/author/create"]');
  }
  get nameAuthor() {
    return $('//input[@name="name"]');
  }
  get emailAuthor() {
    return $('//input[@name="authorEmail"]');
  }
  get facebookLinkAuthor() {
    return $('//input[@name="facebookLink"]');
  }
  get instagramAuthor() {
    return $('//input[@name="instagramLink"]');
  }
  get twitterAuthor() {
    return $('//input[@name="twitterLink"]');
  }
  get youtubeAuthor() {
    return $('//input[@name="youtubeLink"]');
  }
  get linkedinAuthor() {
    return $('//input[@name="linkedInLink"]');
  }
  get uploadAuthor() {
    return $('//button[@name="authorImage"]');
  }
  get saveUploadAuthor() {
    return $('//button[@class="chakra-button css-1mci4gx"]');
  }
  get authorDetailsAuthor() {
    return $('//textarea[@name="authorDetails"]');
  }
  get saveAuthor() {
    return $('//button[@class="chakra-button css-wgslge"]');
  }

  /* -----------------------------------------------------------------
 
-------------  Tag  ----------------

----------------------------------------------------------------- */
get tagClick(){
  return $('//*[@id="root"]/main/div/div[1]/ul/div/div[1]/li[3]/a[2]/div/div');
}
get createNewTag(){
  return $('//a[@href="/admin/tag/create"]');
}
get nameTag(){
  return $('//input[@name="name"]');
}
get productTypeTag(){
  return $("//span[contains(text(),'Product Type')]");
}
get saveTag(){
  return $("//button[contains(text(),'Save')]");
}


  /* -----------------------------------------------------------------
 
-------------  Post  ----------------

----------------------------------------------------------------- */

get postClick(){
  return $("//span[contains(text(),'Post')]");
}
get createNewPost(){
  return $('//a[@href="/admin/blog/create"]');
}




}

export default LocatorHome;
//module.exports = new LocatorHome();