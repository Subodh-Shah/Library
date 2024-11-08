import Book from './Book.js';

export default function bookComponent() {
	const toggleButton = document.querySelector('#toggle-form');
	const form = document.getElementById('bookForm');
	const closeButton = document.getElementById('close-button');
	const bookFormWrapper = document.querySelector('.book-form-wrapper');

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
		localStorage.setItem('Book', JSON.stringify(book));
		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('pages').value = '';
		document.querySelector('input[name="status"]:checked').checked = false;
	});
}
