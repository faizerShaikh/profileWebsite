var hamBurg = document.querySelector(".hambar");

var hamBars= document.querySelector(".fa-bars");

var nav = document.querySelector("nav");

var menuItems = document.querySelector(".menu-items");

var darkMode = document.querySelector("#darkMode");

var body = document.querySelector("body");

var sideItem = document.querySelector(".sideItem");
var sidebar = document.querySelector(".sidebar");
var closer


hamBurg.addEventListener('click',() => {
        if (hamBars.classList.contains("fa-bars")) {
                menuItems.style.transform = 'translateY(0)';
                menuItems.style.opacity = 1;
                hamBars.classList.remove("fa-bars");
                hamBars.classList.add("fa-times");
                nav.style.height = '70vh';
        } else {
                menuItems.style.transform = 'translateY(-150%)';
                menuItems.style.opacity = 1;
                hamBars.classList.add("fa-bars");
                hamBars.classList.remove("fa-times");  
                nav.style.height = '75px';
        }
});

darkMode.addEventListener('click',() => {
        if(darkMode.classList.contains('fa-sun')) {
                body.classList.add("dark-mode");
                darkMode.classList.add("fa-moon");
                darkMode.classList.remove("fa-sun");
        }else{
                body.classList.remove("dark-mode");
                darkMode.classList.remove("fa-moon");
                darkMode.classList.add("fa-sun");
        }
});
