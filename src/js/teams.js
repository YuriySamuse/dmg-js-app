import teams from './teams-api';

const teamsContainer = document.querySelector('.js-teams');

const teamCardMarkup = createTeamCardMarkup(teams);
teamsContainer.insertAdjacentHTML('beforeend', teamCardMarkup);

teamsContainer.addEventListener('mouseover', onTeamsContainerMousover);

function createTeamCardMarkup(teams) {
  return teams
    .map(({ name, imgURL, description }) => {
      return `
        <li class="teams__item b-carousel__item">
        <img
          src="${imgURL}"
          alt="${name}"
          class="teams__img b-carousel__img"
        />
        <h3 class="title">${name}</h3>
        <p>${description}</p>
      </li>
      `;
    })
    .join('');
}

function onTeamsContainerMousover(evt) {
  const teamsImgEl = evt.target.classList.contains('teams__img');
  if (!teamsImgEl) {
    return;
  }

  const teamEl = evt.target;
  const parentTeamCard = teamEl.closest('.teams__item');
  removeActiveCardClass();
  addActiveCardClass(parentTeamCard);
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector(
    '.teams__item.animate__animated'
  );
  if (currentActiveCard) {
    currentActiveCard.classList.remove('animate__animated', 'animate__pulse');
  }
}

function addActiveCardClass(card) {
  card.classList.add('animate__animated', 'animate__pulse');
}
