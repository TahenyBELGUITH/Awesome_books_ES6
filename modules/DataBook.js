import { titleBook, authorBook, bookSection } from './declaration.js';

export let bookList = JSON.parse(localStorage.getItem('book')) || [];  // eslint-disable-line

// clear inputs
export const clearData = () => {
  titleBook.value = '';
  authorBook.value = '';
};

// display books
export const displayBook = () => {
  bookSection.innerHTML = '';
  for (let i = 0; i < bookList.length; i += 1) {
    bookSection.innerHTML
        += `
        <div id="sectionBook">
        <p> ${bookList[i].title}  </p>
        <p> by </p>
        <p>  ${bookList[i].author}</p>
        <button class="deleteBtn" id="${bookList[i].id}">remove</button>
        </div>
        `;
  }

  document.querySelectorAll('.deleteBtn')
    .forEach((btn) => {
      btn.addEventListener('click', () => {
        deleteData(btn.id); // eslint-disable-line
      });
    });
};

// delete function
const deleteData = (id) => {
  bookList = bookList.filter((books) => books.id !== +id);
  localStorage.book = JSON.stringify(bookList);
  displayBook();
};