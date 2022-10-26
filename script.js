function openMenu() {
    var menuComponent = document.getElementById("menu-list");
    if (menuComponent.style.display === "flex")
        menuComponent.style.display = "none";
    else
        menuComponent.style.display = "flex";
}