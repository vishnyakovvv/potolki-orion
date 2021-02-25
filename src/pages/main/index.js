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

//   (function windowOpen() {
//     let callback = document.querySelector(".callback-modal_js"),
//         buttonOpen = document.querySelector(".callback-open_js"),
//         buttonClose = document.querySelector(".callback-close_js"),
//         inputText = document.querySelector(".input-text-callback_js");


//     buttonOpen.addEventListener("click", openCallbackPopup);

//     function openCallbackPopup() {


//         callback.classList.add("callback_open");
//         inputText.focus();

//         buttonClose.addEventListener("click", closeCallbackPopup);

//         window.addEventListener("keydown", function (event) {
//             if (event.code === "Escape") {
//                 closeCallbackPopup()
//             } 
//         });

//         callback.addEventListener("click", function (event) {
//             if (event.target === callback) {
//                 closeCallbackPopup()
//             }
//         });
//     }

//     function closeCallbackPopup() {
//         callback.classList.remove("callback_open");
//         buttonClose.removeEventListener("click", closeCallbackPopup);
//     }
// })();

document.addEventListener('DOMContentLoaded', function() {

  let modalButtons = document.querySelectorAll('.js-open-modal'),
      overlay = document.querySelector('.js-overlay-modal'),
      closeButtons = document.querySelectorAll('.js-modal-close');

      modalButtons.forEach(function(item){
        item.addEventListener('click', function(e) {

          e.preventDefault();

          let modalId = this.getAttribute('data-modal');
              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

          modalElem.classList.add('active');
          overlay.classList.add('active');
        });

      });

      closeButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
          let parentModal = this.closest('.callback__modal');

          parentModal.classList.remove('active');
          overlay.classList.remove('active');
        });
      });




})
  
