const refs = {
	openModalBtn: document.querySelector('[data-action="open-modal"]'),
	closeModalBtn: document.querySelector('[data-action="close-modal"]'),
	bacdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.bacdrop.addEventListener("click", onBackdropClick);

function onOpenModal() {
	window.addEventListener("keydown", onEscKeyPress);

	document.body.classList.add("show-modal");
}

function onCloseModal() {
	window.removeEventListener("keydown", onEscKeyPress);
	document.body.classList.remove("show-modal");
}

function onBackdropClick(event) {
	// console.log("currentTarget", event.currentTarget);
	// console.log("target", event.target);
	if (event.currentTarget === event.target) {
		onCloseModal();
	}
}

function onEscKeyPress(event) {
	console.log(event.code);

	const ESC_KEY_CODE = "Escape";
	const isEscKey = event.code === ESC_KEY_CODE;

	if (isEscKey) {
		onCloseModal();
	}
}
