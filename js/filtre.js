var toggleBtn = document.getElementById("btn-toggle-form");
var filterForm = document.getElementById("filter-form");

toggleBtn.addEventListener("click", function () {
    var currentAttribute = toggleBtn.getAttribute("aria-expanded");

    if (currentAttribute === "true") {
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtn.textContent = "Afficher les filtres";
        filterForm.classList.add("is-hidden");
    } 
    else {
        toggleBtn.setAttribute("aria-expanded", "true");
        toggleBtn.textContent = "Masquer les filtres";
        filterForm.classList.remove("is-hidden");
    }
});
