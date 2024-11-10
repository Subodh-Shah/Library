export function renderLibrary(library, bookId) {
	const booksWrapper = document.querySelector('.book-card-wrapper');
	booksWrapper.innerHTML = '';
	for (let book of library) {
		booksWrapper.innerHTML += `<div class="book-card-item">
		<h2>${book.title}</h2>
		<div class="address">
			<h3>Author</h3>
			<h3>${book.author}</h3>
		</div>
		<div>
			<span>Pages: ${book.pages}</span>
			<span>Status: ${book.status}</span>
		</div>
		<button type="button" class="delete-button" data-book-id="${bookId}">Delete</button>`;
	}
}
