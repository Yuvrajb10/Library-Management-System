async function fetchReport(reportType) {
    try {
        const response = await fetch(`/reports/${reportType}`);
        if (response.ok) {
            const reportData = await response.json();
            // Process and display the report data
            console.log(reportData); // Replace this with your logic to display data
        } else {
            console.error('Error fetching report:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example: Call fetchReport when a report link is clicked
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        const reportType = event.target.getAttribute('href').split('/').pop();
        event.preventDefault(); // Prevent default navigation
        fetchReport(reportType); // Fetch and display the report
    });
});
