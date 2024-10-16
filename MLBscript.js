// Fetch and display the master list of books
async function fetchMasterListOfBooks() {
    try {
        const response = await fetch('/reports/master-list-books'); // Adjust the URL based on your backend setup
        if (response.ok) {
            const books = await response.json();
            const bookList = document.getElementById('book-list');

            // Clear any existing entries
            bookList.innerHTML = '';

            // Populate the table with book data
            books.forEach(book => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${book.serialNo}</td>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.category}</td>
                    <td>${book.status}</td>
                    <td>${book.cost}</td>
                    <td>${book.procurementDate}</td>
                `;
                bookList.appendChild(row);
            });
        } else {
            console.error('Error fetching book list:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to fetch the book list on page load
document.addEventListener('DOMContentLoaded', fetchMasterListOfBooks);
