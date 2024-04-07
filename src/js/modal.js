const refs = {
  openModalBtns: document.querySelectorAll('[data-action="open-modal"]'),
  closeModalBtns: document.querySelectorAll('[data-action="close-modal"]'),
};

refs.openModalBtns.forEach(elem => {
  elem.addEventListener('click', onOpenModal);
});

refs.closeModalBtns.forEach(elem => {
  elem.addEventListener('click', onCloseModal);
});

function onOpenModal(event) {
  window.addEventListener('keydown', onEscKeyPress);
  const modalId = event.currentTarget.dataset.id;
  const modal = document.getElementById(modalId);
  const backdrop = modal.closest('.backdrop');
  backdrop.addEventListener('click', onBackdropClick);
  backdrop.classList.add('active');
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  document.body.classList.remove('show-modal');
  const backdrop = document.querySelector('.backdrop.active');
  backdrop.removeEventListener('click', onBackdropClick);
  backdrop.classList.remove('active');
  window.removeEventListener('keydown', onEscKeyPress);
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    onCloseModal();
  }
}
