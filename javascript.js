let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

const library = document.querySelector('.library');

const book1 = new Book("book1", "author1", 1, true);
addBookToLibrary(book1);
const book2 = new Book("book2", "author2", 2, false);
addBookToLibrary(book2);
const book3 = new Book("book3", "author3", 3, false);
addBookToLibrary(book3);
const book4 = new Book("book4", "author4", 4, true);
addBookToLibrary(book4);
displayLibrary();

function displayLibrary() {
  for (const aBook of myLibrary) {
    const book = document.createElement('div');
    book.classList.add('book');
    const title = document.createElement('p');
    title.textContent = aBook.title;
    book.appendChild(title);
    const author = document.createElement('p');
    author.textContent = aBook.author;
    book.appendChild(author);
    const pages = document.createElement('p');
    pages.textContent = `${aBook.pages} pages`;
    book.appendChild(pages);
    const isRead = document.createElement('p');
    isRead.textContent = aBook.isRead ? "read" : "not read";
    book.appendChild(isRead);
    library.appendChild(book);
  }
}

const newBookBtn = document.querySelector('.new-book');
newBookBtn.addEventListener('click', displayForm);

function displayForm() {
  const form = document.querySelector('form');
  form.classList.toggle('hidden');
}