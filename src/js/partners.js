import partners from './partners-contant';

const partnersContainer = document.querySelector('.js-partners');
const partnerCardMarkup = createPartnerCardMarkup(partners);
partnersContainer.insertAdjacentHTML('beforeend', partnerCardMarkup);

partnersContainer.addEventListener('mouseover', onPartnerContainerMousover);

function createPartnerCardMarkup(partners) {
  return partners
    .map(({ name, imgURL, width, URL }) => {
      return `
        <li class="partners__item">
            <a
                class="partners__link link"
                href="${URL}"
            >
                <div class="partners__thumb-img">
                    <img
                        class="partners__img"
                        src="${imgURL}"
                        alt="${name}"
                        width="${width}"
                    />
                </div>
                <p>${name}</p>
            </a>
        </li>
    `;
    })
    .join('');
}

function onPartnerContainerMousover(evt) {
  const partnerImgEl = evt.target.classList.contains('partners__img');
  if (!partnerImgEl) {
    return;
  }

  const partnerEl = evt.target;
  const parentPartnerCard = partnerEl.closest('.partners__item');
  removeActiveCardClass();
  addActiveCardClass(parentPartnerCard);
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector(
    '.partners__item.animate__animated'
  );
  if (currentActiveCard) {
    currentActiveCard.classList.remove('animate__animated', 'animate__bounce');
  }
}

function addActiveCardClass(card) {
  card.classList.add('animate__animated', 'animate__bounce');
}
