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
					<div>
							<span>Pages: ${book.pages}</span>
							<span>Status: ${book.status}</span>
					</div>
			`;

		const deleteButton = document.createElement('button');
		deleteButton.type = 'button';
		deleteButton.className = 'delete-button';
		deleteButton.dataset.bookId = index;
		deleteButton.textContent = 'Delete';

		bookCard.appendChild(deleteButton);
		fragment.appendChild(bookCard);
	});

	booksWrapper.appendChild(fragment);
	reRenderLibrary(library);
}

function reRenderLibrary(library) {
	// When the delete button is clicked after it has been rendered...
	let deleteButton = Array.from(document.querySelectorAll('.delete-button'));
	library.forEach((_, index) => {
		for (let button of deleteButton) {
			let buttonNumber = parseInt(button.dataset['bookId']);
			if (index === buttonNumber)
				button.addEventListener('click', () => {
					deleteBookFromLibrary(index);
				});
		}
	});
}

export { renderLibrary };
