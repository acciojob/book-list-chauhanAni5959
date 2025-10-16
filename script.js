document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.getElementById('book-form');
    const bookList = document.getElementById('book-list');

    bookForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get input values
        const title = document.getElementById('title').value.trim();
        const author = document.getElementById('author').value.trim();
        const isbn = document.getElementById('isbn').value.trim();

        // Validation
        if (title === "" || author === "" || isbn === "") {
            alert("Please fill in all fields");
            return;
        }

        // Create row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">X</button></td>
        `;
        bookList.appendChild(newRow);

        // Reset form
        bookForm.reset();
    });

    bookList.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('delete')) {
            e.target.closest('tr').remove();
        }
    });
});
