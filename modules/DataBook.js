import { titleBook, authorBook, bookSection } from './declaration.js';

export let bookList = JSON.parse(localStorage.getItem('book')) || [];  // eslint-disable-line

// clear inputs
export function clearData() {
  titleBook.value = '';
  authorBook.value = '';
}

// display books
export function displayBook() {
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
}

// delete function
function deleteData(id) {
  bookList = bookList.filter((books) => books.id !== +id);
  localStorage.book = JSON.stringify(bookList);
  displayBook();
}