console.log("poinsa");

// Récupération des éléments du DOM
const rechercheInput = document.getElementById("recherche-input");
const listeFaritraContenues = document.getElementById("liste-faritra");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const itemsParPageSelect = document.getElementById("items-par-page");
const pageLinksContainer = document.getElementById("page-links");
let currentPage = 1;
let elementsParPage = parseInt(itemsParPageSelect.value);
let faritraList = [];
let filteredFaritras = [];

// Fonction pour afficher les Faritra dans le DOM
function displayFaritra(faritras) {
    listeFaritraContenues.innerHTML = "";

    const startIndex = (currentPage - 1) * elementsParPage;
    const endIndex = startIndex + elementsParPage;
    const faritrasToDisplay = faritras.slice(startIndex, endIndex);

    faritrasToDisplay.forEach(faritra => {
        const faritraItem = document.createElement("div");
        faritraItem.className = "liste-faritra";
        faritraItem.innerHTML = `
            <strong>N°</strong><strong>${faritra[0]}</strong><br>
            <strong>Fokontany :</strong> ${faritra[1]}<br>
            <strong>Kaomina :</strong> ${faritra[2]}<br>
            <strong>Distrika :</strong> ${faritra[3]}<br>
            <strong>Region :</strong> ${faritra[4]}<br>
            <strong>Province :</strong> ${faritra[5]}<br>
        `;
        listeFaritraContenues.appendChild(faritraItem);
    });
}

// Fonction pour filtrer et afficher les Faritra en fonction de la recherche
function performRecherche(query) {
    filteredFaritras = faritraList.filter(faritra => {
        return (
            faritra[0].toLowerCase().includes(query.toLowerCase()) ||
            faritra[1].toLowerCase().includes(query.toLowerCase()) ||
            faritra[2].toLowerCase().includes(query.toLowerCase()) ||
            faritra[3].toLowerCase().includes(query.toLowerCase()) ||
            faritra[4].toLowerCase().includes(query.toLowerCase()) ||
            faritra[5].toLowerCase().includes(query.toLowerCase())
        );
    });

    currentPage = 1;
    displayFaritra(filteredFaritras);
    updatePagination();
}

// Fonction pour mettre à jour les éléments de pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredFaritras.length / elementsParPage);

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    pageLinksContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement("a");
        pageLink.textContent = i;
        pageLink.href = "#";
        pageLink.dataset.page = i;
        pageLinksContainer.appendChild(pageLink);

        if (i === currentPage) {
            pageLink.classList.add("active");
        }
    }

    const pageLinks = pageLinksContainer.querySelectorAll("a");

    pageLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const requestedPage = parseInt(link.dataset.page);

            if (requestedPage >= 1 && requestedPage <= totalPages) {
                currentPage = requestedPage;
                displayFaritra(filteredFaritras);
                updatePagination();
            }
        });
    });
}

// Gestionnaire d'événement pour le changement du nombre d'éléments par page
itemsParPageSelect.addEventListener("change", function () {
    const selectedValue = itemsParPageSelect.value;
    if (selectedValue === "all") {
        elementsParPage = faritraList.length;
    } else {
        elementsParPage = parseInt(selectedValue);
    }

    currentPage = 1;
    displayFaritra(filteredFaritras);
    updatePagination();
});

// Gestionnaire d'événement pour la recherche en temps réel
rechercheInput.addEventListener("input", function () {
    const query = rechercheInput.value;
    performRecherche(query);
});

// Gestionnaire d'événement pour le bouton "Aloha" (Précédent)
prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayFaritra(filteredFaritras);
        updatePagination();
    }
});

// Gestionnaire d'événement pour le bouton "Aoriana" (Suivant)
nextButton.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredFaritras.length / elementsParPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayFaritra(filteredFaritras);
        updatePagination();
    }
});

// Charge initiale des données
fetch('read-data.php')
    .then(response => response.json())
    .then(data => {
        faritraList = data;
        filteredFaritras = faritraList;
        performRecherche("");

        //mbola tohizana fa mila cachena le tableau-1
        // document.getElementById("tableau-1") 
    });
