const searchWrapper = document.querySelector(".header__actions-wrapper");
const searchToggle = document.querySelector(".header__actions-toggle");
const searchInput = document.querySelector(".search__form-input");

if (searchWrapper && searchToggle && searchInput) {
	const closeSearch = () => {
		searchWrapper.classList.remove("is-open");
		searchToggle.setAttribute("aria-expanded", "false");
	};

	searchToggle.addEventListener("click", () => {
		const isOpen = searchWrapper.classList.toggle("is-open");

		searchToggle.setAttribute("aria-expanded", isOpen);

		if (isOpen) {
			searchInput.focus();
		}
	});

	document.addEventListener("click", (event) => {
		if (!searchWrapper.contains(event.target)) {
			closeSearch();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeSearch();
		}
	});
}
