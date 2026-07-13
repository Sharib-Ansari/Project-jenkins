// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ===============================
// Typing Animation
// ===============================

const text = [
    "MCA Student",
    "Full Stack Developer",
    "AWS Cloud Learner",
    "DevOps Enthusiast",
    "Java Programmer"
];

let index = 0;
let char = 0;
let typing = document.getElementById("typing");

function type(){

    if(char < text[index].length){

        typing.innerHTML += text[index].charAt(char);

        char++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(char > 0){

        typing.innerHTML = text[index].substring(0,char-1);

        char--;

        setTimeout(erase,50);

    }

    else{

        index++;

        if(index >= text.length){

            index = 0;

        }

        setTimeout(type,300);

    }

}

type();


// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll",function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";

    }

    else{

        header.style.boxShadow = "none";

    }

});


// ===============================
// Skill Card Hover
// ===============================

const cards = document.querySelectorAll(".skill-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


// ===============================
// Project Card Hover
// ===============================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="scale(1)";

    });

});


// ===============================
// Welcome Message
// ===============================

console.log("Welcome to Sharib Ansari's Portfolio 🚀");
