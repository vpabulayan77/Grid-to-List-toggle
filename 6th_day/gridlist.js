document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleView');
    const container = document.getElementById('container');
    
    // Fetch books data from JSON file
    fetch('books.json')
        .then(response => response.json())
        .then(books => {
            renderItems(books);
        })
        .catch(error => {
            console.error('Error loading books:', error);
            container.innerHTML = '<p>Error loading books data.</p>';
        });
    
    // Populate container with items
    function renderItems(books) {
        container.innerHTML = books.map(book => `
            <div class="item">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Published:</strong> ${book.published_year}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
            </div>
        `).join('');
    }
    
    // Toggle view
    toggleButton.addEventListener('click', function() {
        if (container.classList.contains('table')) {
            container.classList.remove('table');
            container.classList.add('grid');
            toggleButton.textContent = 'Toggle List';
        } else {
            container.classList.remove('grid');
            container.classList.add('table');
            toggleButton.textContent = 'Toggle Grid';
        }
    });
});