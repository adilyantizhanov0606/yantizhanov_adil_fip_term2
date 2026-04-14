console.log("fired");

//variables
const button = document.querySelector("#button");
const burgerCon = document.querySelector("#menu-con");
let features = {
    design: "Encased in a sleek frosted-glass bottle with a minimalist, premium design aesthetic.",
    glass: "Crafted using a refined multi-stage distillation process for exceptional smoothness and purity.",
    flavour: "Made with high-quality ingredients to deliver a clean, crisp, and refined taste."
},
featuresCircles = document.querySelectorAll(".circle"),
featuresBox = document.querySelector(".features-box")

//functions
function hamburgerMenu() {
	burgerCon.classList.toggle("slide-toggle");
	button.classList.toggle("expanded");
}

function renderText (event) {
    featuresBox.innerHTML = "";

    let featureHeading = event.target.dataset.info;
    let featureText = features[featureHeading];

    let renderedText = document.createElement("p");
    renderedText.textContent = featureText;
    renderedText.classList.add("p-main");
    featuresBox.appendChild(renderedText);
}

//Event Listeners
button.addEventListener("click", hamburgerMenu);
featuresCircles.forEach(function(circle) {
    circle.addEventListener("click", renderText)
});