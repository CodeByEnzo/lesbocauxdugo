let currentOpenCategory = null;

function toggleCategory(categoryId) {
    const container = document.getElementById(`fixed-${categoryId}`);
    const imageGallery = container.querySelector('.image-gallery'); // Sélectionne la galerie d'images à l'intérieur du container

    // Si le container est déjà ouvert
    if (currentOpenCategory === categoryId) {
        container.classList.remove('active'); // Fermer le container
        currentOpenCategory = null; // Aucune catégorie ouverte
    } else {
        // Fermer la catégorie précédemment ouverte (s'il y en a une)
        if (currentOpenCategory) {
            document.getElementById(`fixed-${currentOpenCategory}`).classList.remove('active');
        }
        // Ouvrir la nouvelle catégorie
        container.classList.add('active');

        // Remettre la galerie d'images en haut
        imageGallery.scrollTop = 0;

        // Attacher l'événement scroll à l'image-gallery active
        imageGallery.onscroll = function () {
            showScrollTopButton(imageGallery);
        };

        currentOpenCategory = categoryId; // Mettre à jour la catégorie ouverte
    }
}

// Affiche le bouton quand l'utilisateur a défilé vers le bas de 100px dans la galerie
function showScrollTopButton(imageGallery) {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (!scrollTopBtn) return; // Si le bouton n'existe pas, arrêter la fonction

    // Vérifier la position de défilement dans la galerie
    if (imageGallery.scrollTop > 600) {
        scrollTopBtn.style.display = "block"; // Afficher le bouton
    } else {
        scrollTopBtn.style.display = "none"; // Cacher le bouton
    }
}

// Fonction pour remonter en haut de la galerie
function scrollToTop() {
    const activeGallery = document.querySelector('.fixed-container.active .image-gallery');
    if (activeGallery) {
        activeGallery.scrollTo({
            top: 0,
            behavior: 'smooth' // Fait défiler la galerie doucement vers le haut
        });
    }
}
