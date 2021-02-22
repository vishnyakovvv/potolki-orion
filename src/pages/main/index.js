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
    var elem = document.querySelector('.slide--parent');
    var slideEl = new Flickity( elem, {
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
    let callback = document.querySelector(".callback-modal_js"),
        buttonOpen = document.querySelector(".callback-open_js"),
        buttonClose = document.querySelector(".callback-close_js"),
        inputText = document.querySelector(".input-text-callback_js");


    buttonOpen.addEventListener("click", openCallbackPopup);

    function openCallbackPopup() {


        callback.classList.add("callback_open");
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

    function closeCallbackPopup() {
        callback.classList.remove("callback_open");
        buttonClose.removeEventListener("click", closeCallbackPopup);
    }
})();
  
