"use strict";function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function t(){v=o.clientWidth,d.forEach(function(e){e.style.width="".concat(v,"px")})}function r(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];s.removeAttribute("disabled"),e<0||e>=d.length||(t&&(t=u,clearTimeout(y),a.style.transition="transform ".concat(t,"ms"),y=setTimeout(function(){a.style.transition=""},t)),m[f].classList.remove("slider__pagination-dot-active"),m[e].classList.add("slider__pagination-dot-active"),0===e?c.setAttribute("disabled",""):c.removeAttribute("disabled"),e===d.length-1?s.setAttribute("disabled",""):s.removeAttribute("disabled"),a.style.transform="translateX(-".concat(v*e,"px)"),f=e,localStorage.setItem("activeSlide",f))}var i,o,a,l,c,s,d,u,f,v,m,y,b;b={sliderEl:".slider",defaultActiveSlide:+localStorage.getItem("activeSlide")||0},b=(i=b).sliderEl,i=void 0===(i=i.defaultActiveSlide)?0:i,b=document.querySelector(b),o=b.querySelector(".slider__wrapper"),a=o.querySelector(".slider__inner"),l=b.querySelector(".slider__pagination"),c=b.querySelector(".slider__pagination-prev"),s=b.querySelector(".slider__pagination-next"),d=e(o.querySelectorAll(".slider__slide")),u=500,f=i,v=0,m=[],y=null,t(),function(){for(var e=0;e<d.length;e++){var t=function(e){var t=document.createElement("button");t.classList.add("slider__pagination-dot"),e===f&&t.classList.add("slider__pagination-dot-active");return t.addEventListener("click",function(){r(e)}),t}(e);l.insertAdjacentElement("beforeend",t),m.push(t)}}(),r(f,!1),window.addEventListener("resize",function(){t(),r(f,!1)}),c.addEventListener("click",function(){r(f-1)}),s.addEventListener("click",function(){r(f+1)});