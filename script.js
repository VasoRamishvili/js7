

let accordions = document.querySelectorAll(".first-acord");

accordions.forEach(function(firstaccord) {
    let maind = firstaccord.querySelector(".ddiv");
    let itag = firstaccord.querySelector(".fa-solid.fa-chevron-down");
    let h3 = firstaccord.querySelector(".h33");

    maind.addEventListener("click", function() {
        h3.classList.toggle("h3d");
        itag.classList.toggle("rotate");
    });
});






