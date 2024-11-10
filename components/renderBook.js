export function renderBook(title, author, pages, status) {
	const booksWrapper = document.querySelector('.book-card-wrapper');
	booksWrapper.innerHTML += `<div class="book-card-item">
					<h2>${title}</h2>
					<div class="address">
						<h3>Author</h3>
						<h3>${author}</h3>
					</div>
					<div>
						<span>Pages: ${pages}</span>
						<span>Status: ${status}</span>
					</div>
					<button type="button" class="delete-button">Delete</button>`;
}
