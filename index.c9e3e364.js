(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};let t=!1;function d(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("is-modal-shown"),t?document.body.removeEventListener("keydown",o):document.body.addEventListener("keydown",o),t=!t}function o(e){"Escape"===e.code&&d()}e.openModalBtn.forEach((e=>e.addEventListener("click",d))),e.closeModalBtn.addEventListener("click",d),e.modal.addEventListener("click",(function(e){if(e.target!=e.currentTarget)return;d()}))})();document.querySelector("[data-modal-checkbox]").addEventListener("click",(e=>{e.target.checked?document.querySelector("[data-submit-btn]").disabled=!1:document.querySelector("[data-submit-btn]").disabled=!0}));
//# sourceMappingURL=index.c9e3e364.js.map