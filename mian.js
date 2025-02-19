let menu = document.querySelector(".toggle");
let close = document.querySelector(".close");
let aside = document.querySelector(".move");
let span = document.querySelector(".up");
let alllinks = document.querySelectorAll(".same");
alllinks.forEach((e) => {
    e.addEventListener("click", function() {
        aside.classList.remove("active");
    });
});
menu.onclick = function() {
    aside.classList.toggle("active");
}
close.onclick = function() {
    aside.classList.remove("active");

}
const move = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
})
move.reveal(".landing", { delay: 100, origin: "left" }),
    move.reveal(".learn", { delay: 100, origin: "left" }),
    move.reveal(".travel", { delay: 100, origin: "left" }),
    move.reveal(".news", { delay: 100, origin: "left" }),
    move.reveal(".footer ", { delay: 100, origin: "left" })