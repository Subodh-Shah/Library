import { addBookToLibrary } from './library.js';
import { renderBook } from './renderBook.js';

const toggleButton = document.querySelector('#toggle-form');
const bookFormWrapper = document.querySelector('.book-form-wrapper');
const form = document.querySelector('#book-form');
const closeButton = document.querySelector('#close-button');

export function addNewBook() {
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
		addBookToLibrary(title, author, pages, status);
		renderBook(title, author, pages, status);
		form.reset();
	});
}
