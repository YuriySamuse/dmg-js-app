var e=[{name:"Сінево",imgURL:"../images/partners/6.png",width:"270",URL:"#"},{name:"Smile Baby",imgURL:"../img/partners/Smile-Baby-NEW-2.png",width:"270",URL:"#"},{name:"Bübchen",imgURL:"./images/partners/11.png",width:"270",URL:"#"},{name:"Goo.N",imgURL:"./imgages/partners/3.png",width:"270",URL:"#"}];const n=document.querySelector(".js-partners"),t=e.map((({name:e,imgURL:n,width:t,URL:o})=>`\n        <li class="partners__item">\n            <a\n                class="partners__link link"\n                href="${o}"\n            >\n                <div class="partners__thumb-img">\n                    <img\n                        class="partners__img"\n                        src="${n}"\n                        alt="${e}"\n                        width="${t}"\n                    />\n                </div>\n                <p>${e}</p>\n            </a>\n        </li>\n    `)).join("");n.insertAdjacentHTML("beforeend",t),n.addEventListener("mouseover",(function(e){if(!e.target.classList.contains("partners__img"))return;const n=e.target.closest(".partners__item");(function(){const e=document.querySelector(".partners__item.animate__animated");e&&e.classList.remove("animate__animated","animate__bounce")})(),t=n,t.classList.add("animate__animated","animate__bounce");var t})),(()=>{const e={openMenuBtn:document.querySelector(".menu-open"),closeMenuBtn:document.querySelector(".menu-close"),menu:document.querySelector(".mob-menu"),body:document.querySelector("body"),menuList:document.querySelector(".mob-menu__list")};function n(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll"),e.menuList.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden"),e.body.classList.remove("no-scroll")}))})();const o={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),bacdrop:document.querySelector(".js-backdrop")};function s(){window.removeEventListener("keydown",a),document.body.classList.remove("show-modal")}function a(e){console.log(e.code);"Escape"===e.code&&s()}o.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",a),document.body.classList.add("show-modal")})),o.closeModalBtn.addEventListener("click",s),o.bacdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&s()}));
//# sourceMappingURL=index.945f2692.js.map
