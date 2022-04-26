import Book from './modules/book.js';
import * as BookData from './modules/DataBook.js';
import {
  titleBook, authorBook, addBtn, addLinkPage,
  contactLinkPage, displayLinkPage, listNav, newNav, contactNav,
} from './modules/declaration.js';

import * as luxon from './modules/luxon.js';

addBtn.addEventListener('click', () => {
  if (titleBook.value.trim() !== '' && authorBook.value.trim() !== '') {
    const myBookItem = new Book(titleBook.value, authorBook.value);
    BookData.bookList.push(myBookItem);
    localStorage.setItem('book', JSON.stringify(BookData.bookList));
    BookData.clearData();
    BookData.displayBook();
    displayLinkPage.style.display = 'block';
    addLinkPage.style.display = 'none';
    contactLinkPage.style.display = 'none';
  }
});

window.addEventListener('load', () => {
  BookData.displayBook();
  displayLinkPage.style.display = 'block';
  addLinkPage.style.display = 'none';
  contactLinkPage.style.display = 'none';
});

listNav.addEventListener('click', () => {
  displayLinkPage.style.display = 'block';
  addLinkPage.style.display = 'none';
  contactLinkPage.style.display = 'none';
});

newNav.addEventListener('click', () => {
  displayLinkPage.style.display = 'none';
  addLinkPage.style.display = 'block';
  contactLinkPage.style.display = 'none';
});

contactNav.addEventListener('click', () => {
  displayLinkPage.style.display = 'none';
  addLinkPage.style.display = 'none';
  contactLinkPage.style.display = 'block';
});

const displayTime = () => {
  document.querySelector('#calendar').innerHTML = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_SHORT_WITH_SECONDS);
  setTimeout(displayTime, 1000);
};
displayTime();
