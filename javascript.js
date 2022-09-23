let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.autor = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}