"use strict";var t,o,c,e,n,s,r,a;function i(){t.classList.remove("callback_open"),o.removeEventListener("click",i)}"function"!=typeof(r=window.Element.prototype).matches&&(r.matches=r.msMatchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof r.closest&&(r.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.querySelectorAll(".js-tab-trigger").forEach(function(c){c.addEventListener("click",function(){var e=this.getAttribute("data-tab"),t=document.querySelector('.js-tab-content[data-tab="'+e+'"]'),o=document.querySelector(".js-tab-trigger.active"),e=document.querySelector(".js-tab-content.active");o.classList.remove("active"),c.classList.add("active"),e.classList.remove("active"),t.classList.add("active")})}),s=document.querySelector(".slide--parent"),new Flickity(s,{imagesLoaded:!0,wrapAround:!0,autoPlay:3e3,pauseAutoPlayOnHover:!0,pageDots:!1}),t=document.querySelector(".modal_js"),r=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-modal-close"),c=document.querySelector(".input-text-callback_js"),r.forEach(function(e){e.addEventListener("click",function(){t.classList.add("callback_open"),c.focus(),o.addEventListener("click",i),window.addEventListener("keydown",function(e){"Escape"===e.code&&i()}),t.addEventListener("click",function(e){e.target===t&&i()})})}),(e=document.querySelector(".btn-top__js"))&&(e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){1e3<window.pageYOffset?e.classList.remove("visually-hidden"):e.classList.add("visually-hidden")})),n=document.querySelector(".mobile-menu"),s=document.querySelector(".button-open-menu_js"),r=document.querySelector(".button-close-menu_js"),a=document.querySelector(".mobile-menu-focus_js"),s.addEventListener("click",function(){n.classList.add("mobile-menu_open"),a.focus()}),r.addEventListener("click",function(){n.classList.remove("mobile-menu_open"),a.focus()});