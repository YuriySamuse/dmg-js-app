!function(){var e=[{name:"Сінево",imgURL:"../images/partners/6.png",width:"270",URL:"#"},{name:"Smile Baby",imgURL:"../img/partners/Smile-Baby-NEW-2.png",width:"270",URL:"#"},{name:"Bübchen",imgURL:"./images/partners/11.png",width:"270",URL:"#"},{name:"Goo.N",imgURL:"./imgages/partners/3.png",width:"270",URL:"#"}],n=document.querySelector(".js-partners"),t=e.map((function(e){var n=e.name,t=e.imgURL,o=e.width,a=e.URL;return'\n        <li class="partners__item">\n            <a\n                class="partners__link link"\n                href="'.concat(a,'"\n            >\n                <div class="partners__thumb-img">\n                    <img\n                        class="partners__img"\n                        src="').concat(t,'"\n                        alt="').concat(n,'"\n                        width="').concat(o,'"\n                    />\n                </div>\n                <p>').concat(n,"</p>\n            </a>\n        </li>\n    ")})).join("");n.insertAdjacentHTML("beforeend",t),n.addEventListener("mouseover",(function(e){if(!e.target.classList.contains("partners__img"))return;var n=e.target.closest(".partners__item");o=document.querySelector(".partners__item.animate__animated"),o&&o.classList.remove("animate__animated","animate__bounce"),t=n,t.classList.add("animate__animated","animate__bounce");var t;var o})),function(){var e={openMenuBtn:document.querySelector(".menu-open"),closeMenuBtn:document.querySelector(".menu-close"),menu:document.querySelector(".mob-menu"),body:document.querySelector("body"),menuList:document.querySelector(".mob-menu__list")};function n(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll"),e.menuList.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden"),e.body.classList.remove("no-scroll")}))}();var o={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),bacdrop:document.querySelector(".js-backdrop")};function a(){window.removeEventListener("keydown",c),document.body.classList.remove("show-modal")}function c(e){console.log(e.code);"Escape"===e.code&&a()}o.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",c),document.body.classList.add("show-modal")})),o.closeModalBtn.addEventListener("click",a),o.bacdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&a()}))}();
//# sourceMappingURL=index.d149e1e6.js.map