let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.changeReadStatus = function() {
  this.isRead = !this.isRead;
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

const library = document.querySelector('.library');

for(let i = 0; i < 10; i++) {
  const book = new Book(`book${i+1}`, `author${i+1}`, i+1, true);
  addBookToLibrary(book);
}
displayLibrary();

function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i], i);
  }
}

function displayBook(aBook, index) {
  const book = document.createElement('div');
  book.classList.add('book');
  book.setAttribute('id', `${index}`);
  const removeBookBtn = document.createElement('button');
  removeBookBtn.classList.add('remove');
  removeBookBtn.setAttribute('aria-label', 'remove');
  removeBookBtn.textContent = "✖";
  removeBookBtn.addEventListener('click', removeBook);
  book.appendChild(removeBookBtn);
  const title = document.createElement('p');
  title.textContent = aBook.title;
  book.appendChild(title);
  const author = document.createElement('p');
  author.textContent = aBook.author;
  book.appendChild(author);
  const pages = document.createElement('p');
  pages.textContent = `${aBook.pages} pages`;
  book.appendChild(pages);
  const isReadBtn = document.createElement('button');
  isReadBtn.classList.add('read-status');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z');
  svg.appendChild(path);
  isReadBtn.appendChild(svg); 
  if(aBook.isRead) {
    isReadBtn.classList.add('read');
  }
  else {
    isReadBtn.classList.remove('read');
  }
  isReadBtn.addEventListener('click', changeReadStatus);
  book.appendChild(isReadBtn);
  library.appendChild(book);
}

const newBookBtn = document.querySelector('.new-book');
newBookBtn.addEventListener('click', displayForm);
const form = document.querySelector('form');

function displayForm() {
  form.classList.remove('hidden');
}

form.addEventListener('submit', addBook);

function addBook(event) {
  event.preventDefault();
  form.classList.add('hidden');
  const formData = new FormData(form);
  const title = formData.get('title');
  const author = formData.get('author');
  const pages = formData.get('pages');
  const isRead = formData.get('isRead');
  const book = new Book(title, author, pages, isRead);
  addBookToLibrary(book);
  displayBook(book, myLibrary.length - 1);
}

function removeBook(event) {
  const index = event.target.parentElement.getAttribute('id');
  myLibrary.splice(index, 1);
  const books = document.querySelectorAll('.book');
  books.forEach(book => book.remove());
  displayLibrary();
}

function changeReadStatus(event) {
  const index = event.target.parentElement.getAttribute('id');
  myLibrary[index].changeReadStatus();
  event.target.classList.toggle('read');
}