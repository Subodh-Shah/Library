import { renderLibrary } from './renderLibrary.js';

let library = [];
function addBookToLibrary(book) {
	library.push(book);
	renderLibrary(library);
}

function deleteBookFromLibrary(bookId) {
	library.splice(bookId, 1);
	renderLibrary(library);
}

export { library, addBookToLibrary, deleteBookFromLibrary };
