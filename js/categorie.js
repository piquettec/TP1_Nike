const arrCategories = document.querySelectorAll(".categorie");

arrCategories.forEach(function (categorie) {
    categorie.addEventListener("click", function () {
        arrCategories.forEach(function (bouton) {
            bouton.classList.remove("categorie-active");
        });

        categorie.classList.add("categorie-active");
    });
});