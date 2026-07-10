function scrollToSection(){

document
.getElementById("about")
.scrollIntoView({

behavior:"smooth"

});

}

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.boxShadow="0 0 20px rgba(56,189,248,.5)";

}

else{

nav.style.boxShadow="none";

}

});
