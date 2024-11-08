import Book from './Book.js';

export default function bookComponent() {
	const addButton = document.querySelector('#toggle-form');
	const form = document.getElementById('bookForm');
	const closeButton = document.getElementById('close-button');
	const addBook = document.querySelector('.book-form');

	addButton.addEventListener('click', () => {
		addBook.style.opacity = 1;
	});

	closeButton.addEventListener('click', () => {
		addBook.style.opacity = 0;
	});

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const title = document.getElementById('title').value;
		const author = document.getElementById('author').value;
		const pages = document.getElementById('pages').value;
		const status = document.querySelector(
			'input[name="status"]:checked'
		).value;
		const book = new Book(title, author, pages, status);
		localStorage.setItem('Book', JSON.stringify(book));
	});
}
