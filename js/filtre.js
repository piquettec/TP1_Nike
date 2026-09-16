// 1. Sélection des éléments HTML par leur identifiant
var toggleBtn = document.getElementById("btn-toggle-form");
var filterForm = document.getElementById("filter-form");

// 2. Écoute du clic sur le bouton avec une fonction classique
toggleBtn.addEventListener("click", function () {
    // 3. On récupère la valeur actuelle de l'attribut (qui est une chaîne de caractères)
    var currentAttribute = toggleBtn.getAttribute("aria-expanded");

    // 4. Structure conditionnelle standard (Pas de ternaire)
    if (currentAttribute === "true") {
        // Si le formulaire était affiché, on le cache
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtn.textContent = "Afficher les filtres";
        filterForm.classList.add("is-hidden");
    } else {
        // Si le formulaire était caché, on l'affiche
        toggleBtn.setAttribute("aria-expanded", "true");
        toggleBtn.textContent = "Masquer les filtres";
        filterForm.classList.remove("is-hidden");
    }
});
