const e=document.querySelectorAll("[data-menu-button]"),t=document.querySelector("[data-menu]"),o=document.querySelector(".menu__overlay");function n(){const t=document.body.classList.contains("is-menu-shown");e.forEach((e=>e.setAttribute("aria-expanded",!t))),document.body.classList.toggle("is-menu-shown"),t?document.body.removeEventListener("keydown",d):document.body.addEventListener("keydown",d)}function d(e){"Escape"===e.code&&n()}e.forEach((e=>e.addEventListener("click",n))),o.addEventListener("click",n),t.addEventListener("click",(e=>{"A"===e.target.nodeName&&"A"===e.target.nodeName&&document.body.classList.remove("is-menu-shown")})),(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};let t=!1;function o(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("is-modal-shown"),t?document.body.removeEventListener("keydown",n):document.body.addEventListener("keydown",n),t=!t,t&&document.body.classList.remove("is-menu-shown")}function n(e){"Escape"===e.code&&o()}e.openModalBtn.forEach((e=>e.addEventListener("click",o))),e.closeModalBtn.addEventListener("click",o),e.modal.addEventListener("click",(function(e){if(e.target!=e.currentTarget)return;o()}))})();const c=document.querySelector(".scroll-to-top");window.onscroll=()=>function(){const e=80;window.pageYOffset>e?c.classList.remove("js-transparent"):c.classList.add("js-transparent")}(),c.addEventListener("click",(()=>document.getElementById("header").scrollIntoView()));document.querySelector("[data-modal-checkbox]").addEventListener("click",(e=>{e.target.checked?document.querySelector("[data-submit-btn]").disabled=!1:document.querySelector("[data-submit-btn]").disabled=!0}));
//# sourceMappingURL=index.60ec5a4c.js.map
