class UILocator {
  get registrationFrom() {
    return $("//section[@class='chakra-modal__content css-1kpz94o']");
  }
  get businessSignup() {
    return $("//h2[contains(text(),'Business Signup')]");
  }
  get yourName() {
    return $("//label[contains(text(),'Your Name')]");
  }
  get Email() {
    return $("//label[contains(text(),'Email')]");
  }
  get websiteName() {
    return $("//label[contains(text(),'Website Name')]");
  }
  get phoneNumber() {
    return $("//label[contains(text(),'Phone Number')]");
  }
  get password() {
    return $("//label[contains(text(),'Password')]");
  }
  get confirmPassword() {
    return $("//label[contains(text(),'Confirm Password')]");
  }
  get saveRegistration() {
    return $("//button[contains(text(),'Save')]");
  }


  //-----------------------------------------------------------Sites UI Testing-----------------------------------------------


  get UI_SitesClick() {
    return $("//span[contains(text(),'Sites')]");
  }


  /* -----------------------------------------------------------------
 
   -------------  Page  ----------------

----------------------------------------------------------------- */

  get UI_pageClick() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[1]/ul[1]/div[1]/div[1]/li[2]/a[1]/div[1]/div[1]/span[1]");
  }

  get UI_search() {
    return $("//input[@class='chakra-input css-1x13kex']");
  }

  get UI_pageName() {
    return $("//th[contains(text(),'Page Name')]");
  }

  get UI_created() {
    return $("//th[contains(text(),'Created')]");
  }

  get UI_update() {
    return $("//th[contains(text(),'Updated')]");
  }

  get UI_setHomePage() {
    return $("//th[contains(text(),'Set Home Page')]");
  }

  get UI_setPageStatus() {
    return $("//th[contains(text(),'Set Page Status')]");
  }

  get UI_action() {
    return $("//th[contains(text(),'Action')]");
  }



  get UI_pageBuilder() {
    return $("//button[contains(text(),'Page Details')]");
  }
  get UI_delete() {
    return $("//button[contains(text(),'Delete')]");
  }

  get UI_createNew() {
    return $("//a[contains(text(),'Create new')]");
  }
  get UI_settingPage() {
    return $("//button[@class='chakra-button css-1mghlvv']");
  }
  get UI_pageSlug() {
    return $("//p[contains(text(),'Page Slug:')]");
  }
  get UI_metaDescription() {
    return $("//p[contains(text(),'Meta Description:')]");
  }
  get UI_metaKeyword() {
    return $("//p[contains(text(),'Meta Keywords:')]");
  }
  get UI_openGraph() {
    return $("//p[contains(text(),'Open Graph Protocol Image:')]");
  }


  /* -----------------------------------------------------------------
     
           -------------  media library  ----------------
    
   ----------------------------------------------------------------- */

   get UI_mediaLibraryClick() {
    return $("//span[contains(text(),'Media Library')]");
  }

   get UI_nameML() {
    return $("//label[contains(text(),'Name')]");
  }

   get UI_allText() {
    return $("//label[contains(text(),'Alt Text')]");
  }

   get UI_captionML() {
    return $("//label[contains(text(),'Caption')]");
  }

   get UI_descriptionML() {
    return $("//label[contains(text(),'Description')]");
  }

   get UI_AllTabML() {
    return $("(//button[@class='chakra-tabs__tab css-1vrgtg3'])[1]");
  }

   get UI_imagML() {
    return $("(//button[@class='chakra-tabs__tab css-1vrgtg3'])[2]");
  }

   get UI_VideosML() {
    return $("(//button[@class='chakra-tabs__tab css-1vrgtg3'])[3]");
  }

   get UI_DocsML() {
    return $("(//button[@class='chakra-tabs__tab css-1vrgtg3'])[4]");
  }

   get UI_miceML() {
    return $("(//button[@class='chakra-tabs__tab css-1vrgtg3'])[5]");
  }

   get UI_editIcon() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/*[2]");
  }
   get UI_deleteIcon() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/*[3]");
  }

   get UI_paginationML() {
    return $("(//button[@class='chakra-tabs__tab css-1vrgtg3'])[5]");
  }



  //-----------------------------------------------------------Blog UI Testing-----------------------------------------------


  get UI_blogClick() {
    return $("//body/div[@id='root']/main[1]/div[1]/div[1]/ul[1]/div[1]/div[1]/li[3]/div[1]");
  }


  /* -----------------------------------------------------------------
 
   -------------  Author  ----------------

----------------------------------------------------------------- */

get UI_authorClick() {
  return $("//span[contains(text(),'Author')]");
}

get UI_searchAuthor() {
  return $('//input[@class="chakra-input css-1x13kex"]');
}
get UI_createNewAuthor() {
  return $('//a[@href="/admin/author/create"]');
}

get UI_nameAuthor() {
  return $("//th[contains(text(),'NAME')]");
}

get UI_emailAuthor() {
  return $("//th[contains(text(),'EMAIL')]");
}

get UI_addedOnAuthor() {
  return $("//th[contains(text(),'ADDED ON')]");
}

get UI_socialLinkAuthor() {
  return $("//th[contains(text(),'SOCIAL LINKS')]");
}

get UI_detailsAuthor() {
  return $("//th[contains(text(),'DETAILS')]");
}

get UI_activeAuthor() {
  return $("//th[contains(text(),'ACTIVE')]");
}


get UI_nameAuthorField() {
  return $('//input[@name="name"]');
}
get UI_emailAuthorField() {
  return $('//input[@name="authorEmail"]');
}
get UI_facebookLinkAuthor() {
  return $('//input[@name="facebookLink"]');
}
get UI_instagramAuthor() {
  return $('//input[@name="instagramLink"]');
}
get UI_twitterAuthor() {
  return $('//input[@name="twitterLink"]');
}
get UI_youtubeAuthor() {
  return $('//input[@name="youtubeLink"]');
}
get UI_linkedinAuthor() {
  return $('//input[@name="linkedInLink"]');
}
get UI_uploadAuthor() {
  return $('//button[@name="authorImage"]');
}
get UI_saveUploadAuthor() {
  return $('//button[@class="chakra-button css-1mci4gx"]');
}
get UI_authorDetailsAuthor() {
  return $('//textarea[@name="authorDetails"]');
}
get UI_saveAuthor() {
  return $('//button[@class="chakra-button css-wgslge"]');
}


}
export default UILocator;