function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
//with the const function we are targeting those 2 elements from the html, so that whenever we click it(hamburger menu) add or remove(toggle) the open function to the targeted chunk of the css