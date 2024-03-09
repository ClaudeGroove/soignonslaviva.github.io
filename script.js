// Hero section

const heroSection = document.querySelector(".about");
console.dir(heroSection.getBoundingClientRect())
console.log(window.scrollY)
console.log(document.getElementById("btnAbout"))
const btnAbout = document.getElementById("btnAbout")
btnAbout.addEventListener("click", handleAboutScroll);
function handleAboutScroll() {
    window.scrollTo(
        {
            top:687,
            left:0,
            behavior:"smooth"
        }
    )
   
}



const btnDevis = document.getElementById("btnDevis")
btnDevis.addEventListener("click", handleDevisScroll);
function handleDevisScroll() {
    window.scrollTo(
        {
            top:3800,
            left:0,
            behavior:"smooth"
        }
    )
   
}
const btnContact = document.getElementById("btnContact")
btnContact.addEventListener("click", handleContactScroll);
function handleContactScroll() {
    window.scrollTo(
        {
            top:5500,
            left:0,
            behavior:"smooth"
        }
    )
   
}
const btnLocalisation = document.getElementById("btnService")
btnLocalisation.addEventListener("click", handleServiceScroll);
function handleServiceScroll() {
    window.scrollTo(
        {
            top:1556,
            left:0,
            behavior:"smooth"
        }
    )
   
}
const fixedElement = document.getElementById("scroll-btn");

// Fonction anonyme donc sans nom
fixedElement.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});


window.addEventListener("scroll", function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const hideAt = 1000;
    if (scrollPosition <= hideAt) {
        fixedElement.style.visibility = "hidden";
    } else {
        fixedElement.style.visibility = "visible";
    }
});


const navSlider = () => {
    const button = document.querySelector(".burger");
    const navMenu = document.querySelector(".navbar-menu");
    const navLinks = document.querySelectorAll(".navbar-menu li");
    button.addEventListener("click", () =>{
        navMenu.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";
        
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
    }); 

       
});

}

 
navSlider();



