"use strict";var t,e,c,a;function n(){t.classList.remove("callback_open"),c.removeEventListener("click",n)}document.querySelectorAll(".js-tab-trigger").forEach(function(a){a.addEventListener("click",function(){var e=this.getAttribute("data-tab"),t=document.querySelector('.js-tab-content[data-tab="'+e+'"]'),c=document.querySelector(".js-tab-trigger.active"),e=document.querySelector(".js-tab-content.active");c.classList.remove("active"),a.classList.add("active"),e.classList.remove("active"),t.classList.add("active")})}),e=document.querySelector(".slide--parent"),new Flickity(e,{imagesLoaded:!0,wrapAround:!0,autoPlay:3e3,pauseAutoPlayOnHover:!0,pageDots:!1}),t=document.querySelector(".callback-modal_js"),e=document.querySelector(".callback-open_js"),c=document.querySelector(".callback-close_js"),a=document.querySelector(".input-text-callback_js"),e.addEventListener("click",function(){t.classList.add("callback_open"),a.focus(),c.addEventListener("click",n),window.addEventListener("keydown",function(e){"Escape"===e.code&&n()}),t.addEventListener("click",function(e){e.target===t&&n()})});