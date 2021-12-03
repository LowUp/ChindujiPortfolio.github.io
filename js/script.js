const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
let icon = document.getElementById("icon");
let localData = localStorage.getItem("theme");


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        
    })
})


if(localStorage.getItem("theme") === null)
{
    localStorage.setItem("theme", "light");
}

if(localData === "light")
{
    icon.src = "./images/moon.png";
    document.body.classList.remove("dark-theme");
}
else if(localData === "dark")
{
    icon.src = "./images/sun.png";
    document.body.classList.add("dark-theme");
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./images/sun.png";
        localStorage.setItem("theme", "dark");
    }else{
        icon.src = "./images/moon.png";
        localStorage.setItem("theme", "light");
    }
}
