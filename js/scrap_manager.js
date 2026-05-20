async function loadScrapLand() {
    const response = await fetch('../src/scraps/scraps.json');
    const data = await response.json();
    const container = document.getElementById('scraps-container');

    data.forEach(item => {
        // Create a card for every scrap
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card custom-card h-100 shadow-sm mt-auto">
                    <div class="card-body">
                        <h5 class="card-title text-warning">${item.title}</h5>
                        <p class="card-text small">${item.summary}</p>
                        <button class="btn btn-sm btn-outline-warning mt-auto" 
                                onclick="loadNote('${item.id}')">
                            Leer nota
                        </button>
                    </div>
                </div>
            </div>`;
        container.innerHTML += card;
    });

    // Save the global data for the modal
    window.scrapsData = data;
}

function loadNote(id) {
    const note = window.scrapsData.find(n => n.id === id);
    document.getElementById('modalTitle').innerText = note.title;
    document.getElementById('modalBody').innerHTML = note.content;
    
    const myModal = new bootstrap.Modal(document.getElementById('wikiModal'));
    myModal.show();
}

function zoomImage(route, description) {
    // Search for the elements
    const modalImage = document.getElementById('modalImageDisplay');
    const modalText = document.getElementById('modalImageCaption');

    // Set the new info
    modalImage.src = route;
    modalText.innerText = description;

    // Show the modal
    const modalVisualizer = new bootstrap.Modal(document.getElementById('imageModal'));
    modalVisualizer.show();
}

// Load the main script
loadScrapLand();