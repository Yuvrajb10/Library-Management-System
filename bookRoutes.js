const express = require('express');
const router = express.Router();
const books = [
  { codeNo: 'SC(B/M)000001', name: 'Science Book 1', author: 'Author A', available: true },
  { codeNo: 'EC(B/M)000001', name: 'Economics Book 1', author: 'Author B', available: true },
  { codeNo: 'FC(B/M)000001', name: 'Fiction Book 1', author: 'Author C', available: false },
  // Add more books as needed
];

// Route to get available books
router.get('/available', (req, res) => {
  const availableBooks = books.filter(book => book.available);
  res.json(availableBooks);
});
// /routes/bookRoutes.js

router.post('/issue', (req, res) => {
    const { bookName, authorName, issueDate, returnDate, remarks } = req.body;

    // Here you would typically check if the book is available and then issue it
    // This is a mock implementation, replace with your logic
    const bookIssued = {
        bookName,
        authorName,
        issueDate,
        returnDate,
        remarks: remarks || "No remarks",
    };

    // Respond with a success message
    res.status(200).json({ message: 'Book issued successfully!', bookIssued });
});
// /routes/bookRoutes.js

router.post('/return', (req, res) => {
    const { bookName, authorName, serialNumber, issueDate, returnDate, remarks } = req.body;

    // Here you would typically check if the book exists and handle the return logic
    // This is a mock implementation; replace with your actual logic
    const bookReturned = {
        bookName,
        authorName,
        serialNumber,
        issueDate,
        returnDate,
        remarks: remarks || "No remarks",
    };

    // Respond with a success message
    res.status(200).json({ message: 'Book returned successfully!', bookReturned });
});
// /routes/bookRoutes.js

router.post('/pay-fine', (req, res) => {
    const { bookName, authorName, serialNumber, issueDate, returnDate, actualReturnDate, finePaid, remarks } = req.body;

    // Here you would typically check the fine amount and handle the payment logic
    // This is a mock implementation; replace with your actual logic

    // For example, check if the book exists, if the fine is valid, etc.
    const fineAmount = calculateFine(issueDate, returnDate, actualReturnDate); // Custom function to calculate fine

    // Assuming fine is paid
    if (finePaid) {
        // Update database to reflect the fine payment
        // ...
        res.status(200).json({ message: 'Fine paid successfully!' });
    } else {
        res.status(400).json({ message: 'Fine payment was not confirmed.' });
    }
});

// Example fine calculation function
function calculateFine(issueDate, returnDate, actualReturnDate) {
    // Calculate fine logic goes here
    // For simplicity, this function currently returns a static value
    return 0; // Replace with actual fine calculation
}


module.exports = router;
