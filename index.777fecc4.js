!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var a,i=document.querySelectorAll("[data-menu-button]"),c=document.querySelector("[data-menu]"),u=document.querySelector(".menu__overlay");function l(){var e=document.body.classList.contains("is-menu-shown");i.forEach((function(t){return t.setAttribute("aria-expanded",!e)})),document.body.classList.toggle("is-menu-shown"),e?document.body.removeEventListener("keydown",s):document.body.addEventListener("keydown",s)}function s(e){"Escape"===e.code&&l()}i.forEach((function(e){return e.addEventListener("click",l)})),u.addEventListener("click",l),c.addEventListener("click",(function(e){"A"===e.target.nodeName&&"A"===e.target.nodeName&&document.body.classList.remove("is-menu-shown")})),"function"!=typeof(a=window.Element.prototype).matches&&(a.matches=a.msMatchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||function(e){for(var t=this,r=(t.document||t.ownerDocument).querySelectorAll(e),n=0;r[n]&&r[n]!==t;)++n;return Boolean(r[n])}),"function"!=typeof a.closest&&(a.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),r=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var r=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+r+'"]').classList.add("active"),t.classList.add("active"),document.body.classList.add("modal-open"),document.body.classList.remove("is-menu-shown")}))})),r.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active"),document.body.classList.remove("modal-open")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open")}))}));var d=document.querySelector(".scroll-to-top");window.onscroll=function(){return e=80,void(window.pageYOffset>e?d.classList.remove("js-transparent"):d.classList.add("js-transparent"));var e},d.addEventListener("click",(function(){return document.getElementById("header").scrollIntoView()})),document.querySelector("[data-modal-checkbox]").addEventListener("click",(function(e){e.target.checked?document.querySelector("[data-submit-btn]").disabled=!1:document.querySelector("[data-submit-btn]").disabled=!0}));var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t){return m.default(e)||v.default(e,t)||p.default(e,t)||y.default()};var m=b(o("8slrw")),v=b(o("7AJDX")),y=b(o("ifqQW")),p=b(o("auk6i"));function b(e){return e&&e.__esModule?e:{default:e}}var g,S={};Object.defineProperty(S,"__esModule",{value:!0}),S.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var h="Expected a function",L=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,O=/^0o[0-7]+$/i,j=parseInt,_="object"==typeof t&&t&&t.Object===Object&&t,q="object"==typeof self&&self&&self.Object===Object&&self,x=_||q||Function("return this")(),k=Object.prototype.toString,M=Math.max,A=Math.min,N=function(){return x.Date.now()};function I(e,t,r){var n,o,a,i,c,u,l=0,s=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var r=n,a=o;return n=o=void 0,l=t,i=e.apply(a,r)}function v(e){return l=e,c=setTimeout(p,t),s?m(e):i}function y(e){var r=e-u;return void 0===u||r>=t||r<0||d&&e-l>=a}function p(){var e=N();if(y(e))return b(e);c=setTimeout(p,function(e){var r=t-(e-u);return d?A(r,a-(e-l)):r}(e))}function b(e){return c=void 0,f&&n?m(e):(n=o=void 0,i)}function g(){var e=N(),r=y(e);if(n=arguments,o=this,u=e,r){if(void 0===c)return v(u);if(d)return c=setTimeout(p,t),m(u)}return void 0===c&&(c=setTimeout(p,t)),i}return t=D(t)||0,T(r)&&(s=!!r.leading,a=(d="maxWait"in r)?M(D(r.maxWait)||0,t):a,f="trailing"in r?!!r.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),l=0,n=u=o=c=void 0},g.flush=function(){return void 0===c?i:b(N())},g}function T(t){var r=void 0===t?"undefined":e(S)(t);return!!t&&("object"==r||"function"==r)}function D(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(S)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==k.call(t)}(t))return NaN;if(T(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=T(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(L,"");var n=E.test(t);return n||O.test(t)?j(t.slice(2),n?2:8):w.test(t)?NaN:+t}g=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(h);return T(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),I(e,t,{leading:n,maxWait:t,trailing:o})};var P,J="modal-form",W="contact-form",$=document.querySelector(".js-overlay-modal "),C=document.querySelector(".modal-wrapper"),U=document.querySelector(".modal__form");U.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(J),$.classList.remove("active"),C.classList.remove("active")})),U.addEventListener("input",e(g)((function(e){var t=localStorage.getItem(J);(t=t?JSON.parse(t):{})[e.target.name]=e.target.value,localStorage.setItem(J,JSON.stringify(t))}),500)),(P=localStorage.getItem(J))&&(P=JSON.parse(P),Object.entries(P).forEach((function(t){var r=e(f)(t,2),n=r[0],o=r[1];U.elements[n].value=o})));var B=document.querySelector(".contacts__form");B.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(W)})),B.addEventListener("input",e(g)((function(e){var t=localStorage.getItem(W);(t=t?JSON.parse(t):{})[e.target.name]=e.target.value,localStorage.setItem(W,JSON.stringify(t))}),500)),function(){var t=localStorage.getItem(W);t&&(t=JSON.parse(t),Object.entries(t).forEach((function(t){var r=e(f)(t,2),n=r[0],o=r[1];B.elements[n].value=o})))}()}();
//# sourceMappingURL=index.777fecc4.js.map