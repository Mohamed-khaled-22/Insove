// nav bar in mobile

const nav = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".nav-mobile .switch-key");
const navRghtIcn = document.querySelector(".nav-mobile .switch-key .right-icon");
const navLftIcn = document.querySelector(".nav-mobile .switch-key .left-icon");

navBtn.addEventListener(("click"), () => {
    console.log(nav)
    nav.classList.toggle("-translate-x-[208px]");
    navRghtIcn.classList.toggle("hidden");
    navLftIcn.classList.toggle("hidden");
})

// testimonials 
const cardsDiv = document.querySelector(".testimonials .cards-div");
const angels = document.querySelectorAll(".testimonials i");
const goRight = document.querySelector(".testimonials .go-right");
const boletsDiv = document.querySelector(".testimonials .bolets");
const bolets = document.querySelectorAll(".testimonials .bolets span");
let temp = 0;

angels.forEach((a) => {
    a.addEventListener(("click"), (an) => {
        if (an.target === goRight) {
            if (temp < 2) {
                temp += 1;
            }
        } else {
            if (temp > 0) {
                temp -= 1;
            }
        }
        checkBolet()
    })
})

bolets.forEach((bolet) => {
    bolet.addEventListener(("click"), (b) => {
        bolets.forEach((e) => {
            e.classList.remove("active")
        })
        b.target.classList.add("active")
        if (b.target === b.target.parentElement.children[0]) {
            cardsDiv.style.left = "-0%"
            temp = 0;
        } else if (b.target === b.target.parentElement.children[1]) {
            cardsDiv.style.left = "-100%"
            temp = 1;
        } else {
            cardsDiv.style.left = "-200%"
            temp = 2;
        }
    })
})

function checkBolet() {
    boletsDiv.children[temp].click()
}

// our team 
const membersDiv = document.querySelector(".our-team .members-div");
const teamBoletsDiv = document.querySelector(".our-team .bolets");
const teamBolets = document.querySelectorAll(".our-team .bolets span");

teamBolets.forEach((bolet) => {
    bolet.addEventListener(("click"), (b) => {
        teamBolets.forEach((e) => { e.classList.remove("active") });
        b.target.classList.add("active");
        if (b.target === teamBoletsDiv.children[0]) { membersDiv.style.left = "0%" }
        else if (b.target === teamBoletsDiv.children[1]) {
            if (window.innerWidth >= 1280) { membersDiv.style.left = "-50%" }
            else { membersDiv.style.left = "-100%" }
        } else {
            if (window.innerWidth >= 1280) { membersDiv.style.left = "-100%" }
            else { membersDiv.style.left = "-200%" }
        }
    })
});

window.addEventListener(("resize"), () => {
    teamBoletsDiv.children[0].click()

});

// faqs 
const quesBox = document.querySelectorAll(".faqs .box .question");
quesBox.forEach((b) => {
    const showMore = b.parentElement.querySelector(".question .show-more");
    const showLess = b.parentElement.querySelector(".question .show-less");
    const answer = b.parentElement.querySelector(".answer");
    b.addEventListener(("click"), () => {
        showMore.classList.toggle("hidden");
        showLess.classList.toggle("hidden");
        answer.classList.toggle("h-0");
    })
})

