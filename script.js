const title = document.getElementById('title');
const author = document.getElementById('author');
const isbn = document.getElementById('isbn');
const submit = document.getElementById('submit');
const bookList = document.getElementById('book-list');

submit.addEventListener('click', function(e) {
  e.preventDefault();
  const titleVal = title.value.trim();
  const authorVal = author.value.trim();
  const isbnVal = isbn.value.trim();
  if (!titleVal || !authorVal || !isbnVal) return;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${titleVal}</td>
    <td>${authorVal}</td>
    <td>${isbnVal}</td>
    <td><button class="delete">X</button></td>
  `;
  bookList.appendChild(row);

  title.value = '';
  author.value = '';
  isbn.value = '';
});

bookList.addEventListener('click', function(e) {
  if(e.target.classList.contains('delete')) {
    e.target.closest('tr').remove();
  }
});
