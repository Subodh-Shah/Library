import Book from './Book.js';
import { addBookToLibrary } from './library.js';

const toggleButton = document.querySelector('#toggle-form');
const bookFormWrapper = document.querySelector('.book-form-wrapper');
const form = document.querySelector('#book-form');
const closeButton = document.querySelector('#close-button');

function addNewBook() {
	toggleButton.addEventListener('click', () => {
		bookFormWrapper.style.display = 'block';
	});

	closeButton.addEventListener('click', () => {
		bookFormWrapper.style.display = 'none';
	});

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		let title = document.getElementById('title').value;
		let author = document.getElementById('author').value;
		let pages = document.getElementById('pages').value;
		let status = document.querySelector(
			'input[name="status"]:checked'
		).value;
		const book = new Book(title, author, pages, status);
		addBookToLibrary(book);
		form.reset();
	});
}

export { addNewBook };
