// /routes/reportRoutes.js

router.get('/master-list-books', (req, res) => {
    // Fetch and return the master list of books from the database
    // For demo, sending static data
    const books = [{ title: "Book 1" }, { title: "Book 2" }];
    res.json(books);
});

router.get('/master-list-movies', (req, res) => {
    // Fetch and return the master list of movies
    const movies = [{ title: "Movie 1" }, { title: "Movie 2" }];
    res.json(movies);
});

router.get('/master-list-memberships', (req, res) => {
    // Fetch and return the master list of memberships
    const memberships = [{ type: "Standard" }, { type: "Premium" }];
    res.json(memberships);
});

router.get('/active-issues', (req, res) => {
    // Fetch and return active issues
    const activeIssues = [{ issue: "Issue 1" }, { issue: "Issue 2" }];
    res.json(activeIssues);
});

router.get('/overdue-returns', (req, res) => {
    // Fetch and return overdue returns
    const overdueReturns = [{ book: "Overdue Book 1" }];
    res.json(overdueReturns);
});

router.get('/pending-issue-requests', (req, res) => {
    // Fetch and return pending issue requests
    const pendingRequests = [{ request: "Pending Request 1" }];
    res.json(pendingRequests);
});
// /routes/reportRoutes.js

router.get('/master-list-books', (req, res) => {
    // Example static data. You should replace this with a database query.
    const books = [
        {
            serialNo: "B001",
            name: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            category: "Fiction",
            status: "Available",
            cost: "$10.99",
            procurementDate: "2022-01-10"
        },
        {
            serialNo: "B002",
            name: "1984",
            author: "George Orwell",
            category: "Dystopian",
            status: "Available",
            cost: "$8.99",
            procurementDate: "2022-03-15"
        },
        // Add more book entries as needed
    ];
    
    res.json(books);

});
// /routes/reportRoutes.js

router.get('/master-list-movies', (req, res) => {
    // Example static data. You should replace this with a database query.
    const movies = [
        {
            serialNo: "M001",
            name: "Inception",
            director: "Christopher Nolan",
            category: "Science Fiction",
            status: "Available",
            cost: "$12.99",
            procurementDate: "2022-05-15"
        },
        {
            serialNo: "M002",
            name: "The Shawshank Redemption",
            director: "Frank Darabont",
            category: "Drama",
            status: "Available",
            cost: "$9.99",
            procurementDate: "2022-04-20"
        },
        // Add more movie entries as needed
    ];
    
    res.json(movies);
});
// /routes/reportRoutes.js

router.get('/master-list-memberships', (req, res) => {
    // Example static data. Replace this with a database query as needed.
    const memberships = [
        {
            membershipId: "M001",
            name: "John Doe",
            contactNumber: "1234567890",
            contactAddress: "123 Main St, Cityville",
            aadharCardNo: "1234-5678-9012",
            startDate: "2022-01-10",
            endDate: "2023-01-10",
            status: "Active",
            amountPending: "$0.00"
        },
        {
            membershipId: "M002",
            name: "Jane Smith",
            contactNumber: "0987654321",
            contactAddress: "456 Elm St, Townsville",
            aadharCardNo: "9876-5432-1098",
            startDate: "2021-06-15",
            endDate: "2022-06-15",
            status: "Inactive",
            amountPending: "$5.00"
        },
        // Add more membership entries as needed
    ];
    
    res.json(memberships);
});

