import Book from './Book.js';

let library = [];
function addBookToLibrary(title, author, pages, status) {
	const book = new Book(title, author, pages, status);
	library.push(book);
	return library;
}

export { addBookToLibrary };
