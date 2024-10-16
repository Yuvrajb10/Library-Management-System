// Fetch and display the master list of movies
async function fetchMasterListOfMovies() {
    try {
        const response = await fetch('/reports/master-list-movies'); // Adjust the URL based on your backend setup
        if (response.ok) {
            const movies = await response.json();
            const movieList = document.getElementById('movie-list');

            // Clear any existing entries
            movieList.innerHTML = '';

            // Populate the table with movie data
            movies.forEach(movie => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${movie.serialNo}</td>
                    <td>${movie.name}</td>
                    <td>${movie.director}</td>
                    <td>${movie.category}</td>
                    <td>${movie.status}</td>
                    <td>${movie.cost}</td>
                    <td>${movie.procurementDate}</td>
                `;
                movieList.appendChild(row);
            });
        } else {
            console.error('Error fetching movie list:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to fetch the movie list on page load
document.addEventListener('DOMContentLoaded', fetchMasterListOfMovies);
