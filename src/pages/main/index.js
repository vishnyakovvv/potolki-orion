!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

// open tabs

(function tabs () {
   let jsTriggers = document.querySelectorAll('.js-tab-trigger');

    jsTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function () {
          let id = this.getAttribute('data-tab'),
              content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
              activeTrigger = document.querySelector('.js-tab-trigger.active'),
              activeContent = document.querySelector('.js-tab-content.active');
          
          activeTrigger.classList.remove('active');
          trigger.classList.add('active');
          
          activeContent.classList.remove('active');
          content.classList.add('active');
        });
    });
  })();
  
  
  // slider

  (function slider () {
    let elem = document.querySelector('.slide--parent');
    let slideEl = new Flickity( elem, {
      // options
      imagesLoaded: true,
      wrapAround: true,
      autoPlay: 3000,
      pauseAutoPlayOnHover: true,
      pageDots: false
    });
  })();
  


  // window open

  (function windowOpen() {
    let body = document.querySelector("body"),
        callback = document.querySelector(".modal_js"),
        buttonOpen = document.querySelectorAll(".js-open-modal"),
        buttonClose = document.querySelector(".js-modal-close"),
        inputText = document.querySelector(".input-text-callback_js");

    buttonOpen.forEach(function(item) {
      item.addEventListener("click", openCallbackPopup);

      function openCallbackPopup() {
  
          callback.classList.add("callback_open");
          body.style.overflow = "hidden";
          inputText.focus();
  
          buttonClose.addEventListener("click", closeCallbackPopup);
  
          window.addEventListener("keydown", function (event) {
              if (event.code === "Escape") {
                  closeCallbackPopup()
              } 
          });
  
          callback.addEventListener("click", function (event) {
              if (event.target === callback) {
                  closeCallbackPopup()
              }
          });
      }
    });


    function closeCallbackPopup() {
        callback.classList.remove("callback_open");
        body.style.overflow = "unset";
        buttonClose.removeEventListener("click", closeCallbackPopup);
    }
})();

// top button

(function () {
  const buttonTop = document.querySelector(".btn-top__js");
  if(!buttonTop) {
      return;
  }

  function handleScroll() {
      if (window.pageYOffset > 1000) {
              buttonTop.classList.remove("visually-hidden");
      } else {
              buttonTop.classList.add("visually-hidden");
      }
  }
  
  function handleClick() {
          window.scrollTo({
              top: 0,
              behavior: "smooth"
          });
      }
  
  buttonTop.addEventListener("click", handleClick);
  window.addEventListener("scroll", handleScroll);

})();

// mobile-menu

(function() {
    let body = document.querySelector("body"),
        mobileMenu = document.querySelector(".mobile-menu"),
        buttonOpenMenu = document.querySelector(".button-open-menu_js"),
        buttonCloseMenu = document.querySelector(".button-close-menu_js"),
        mobileMenuFocus = document.querySelector(".mobile-menu-focus_js");

        buttonOpenMenu.addEventListener("click", () => {
            mobileMenu.classList.add("mobile-menu_open");
            body.style.overflow = "hidden";
            mobileMenuFocus.focus();
        });

        buttonCloseMenu.addEventListener("click", () => {
            mobileMenu.classList.remove("mobile-menu_open");
            body.style.overflow = "unset";
            mobileMenuFocus.focus();
        });
})();

// scroolTo

  (function() {
    let body = document.querySelector("body"),
        mobileMenu = document.querySelector(".mobile-menu"),
        buttonCatalog = document.querySelectorAll('.scroolToCatalog_js'),
        buttonShowroom = document.querySelectorAll('.scroolToShowroom_js'),
        buttonContacts = document.querySelectorAll('.scroolToContacts_js'),
        catalog = document.querySelector('#catalog_js'),
        showroom = document.querySelector('#showroom_js'),
        contacts = document.querySelector('#contacts_js');

        buttonCatalog.forEach (function (item) {
          item.addEventListener('click', () => {
            mobileMenu.classList.remove("mobile-menu_open");
            body.style.overflow = "unset";
            scrollTo(catalog);
          });
        });

        buttonShowroom.forEach (function (item) {
          item.addEventListener('click', () => {
            mobileMenu.classList.remove("mobile-menu_open");
            body.style.overflow = "unset";
            scrollTo(showroom);
          });
        });

        buttonContacts.forEach (function (item) {
          item.addEventListener('click', () => {
            mobileMenu.classList.remove("mobile-menu_open");
            body.style.overflow = "unset";
            scrollTo(contacts);
          });
        });

    function scrollTo(element) {
      window.scroll({
        left: 0, 
        top: element.offsetTop, 
        behavior: 'smooth'
      });
    }
  })();




