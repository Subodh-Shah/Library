import { deleteBookFromLibrary } from './library.js';

function renderLibrary(library) {
	// When book is added to the library from the form..
	const booksWrapper = document.querySelector('.book-card-wrapper');
	booksWrapper.innerHTML = ''; // Clear existing content

	const fragment = document.createDocumentFragment();

	library.forEach((book, index) => {
		const bookCard = document.createElement('div');
		bookCard.className = 'book-card-item';

		bookCard.innerHTML = `
					<h2>${book.title}</h2>
					<div class="address">
							<h3>Author</h3>
							<h3>${book.author}</h3>
					</div>
					<span class="pages">Pages: ${book.pages}</span>`;

		const isCompleted = document.createElement('div');
		isCompleted.className = 'is-completed';

		const switchStatus = document.createElement('span');
		switchStatus.className = `switch-status`;
		switchStatus.innerHTML = `Status: ${book.status}`;

		const switchLabel = document.createElement('label');
		switchLabel.className = 'switch';

		const switchInput = document.createElement('input');
		switchInput.type = 'checkbox';
		switchInput.dataset.bookId = index;
		switchInput.className = 'switch-input';
		library[index].status === 'Completed'
			? (switchInput.checked = true)
			: (switchInput.checked = false);

		const switchSpan = document.createElement('span');
		switchSpan.className = 'slider round';

		const deleteButton = document.createElement('button');
		deleteButton.type = 'button';
		deleteButton.className = 'delete-button';
		deleteButton.dataset.bookId = index;
		deleteButton.textContent = 'Delete';

		switchLabel.appendChild(switchInput);
		switchLabel.appendChild(switchSpan);

		isCompleted.appendChild(switchStatus);
		isCompleted.appendChild(switchLabel);

		bookCard.appendChild(isCompleted);
		bookCard.appendChild(deleteButton);

		fragment.appendChild(bookCard);
	});

	booksWrapper.appendChild(fragment);
	reRenderLibrary(library);
}

function reRenderLibrary(library) {
	// To Re-render any change made after any events in the book cards...
	let deleteButton = Array.from(document.querySelectorAll('.delete-button'));
	let switchStatusButton = Array.from(
		document.querySelectorAll('.switch-input')
	);

	library.forEach((_, index) => {
		for (let button of deleteButton) {
			let buttonNumber = parseInt(button.dataset['bookId']);
			if (index === buttonNumber)
				button.addEventListener('click', () => {
					deleteBookFromLibrary(index);
				});
		}

		for (let button of switchStatusButton) {
			let bookCard = button.parentElement.parentElement;
			let buttonNumber = parseInt(button.dataset['bookId']);
			let switchStatus = bookCard.querySelector('.switch-status');
			if (index === buttonNumber) {
				button.addEventListener('change', () => {
					library[index].status = button.checked
						? 'Completed'
						: 'Reading';

					switchStatus.innerHTML = `Status: ${library[index].status}`;
				});
			}
		}
	});
}

export { renderLibrary };
