import { renderLibrary } from './renderLibrary.js';

let library = [];
function addBookToLibrary(book) {
	library.push(book);
	let bookId = library.indexOf(book);
	renderLibrary(library, bookId);
}

function deleteBookFromLibrary(bookId) {
	library.splice(bookId, bookId);
	renderLibrary(library, bookId);
}

export { library, addBookToLibrary, deleteBookFromLibrary };
