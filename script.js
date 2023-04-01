const mitskiIMG = document.querySelector(".mitski");
mitskiIMG.addEventListener("click", () => {
    mitskiAudio.play()
});
mitskiIMG.addEventListener("mouseout", () => {
    mitskiAudio.pause()
});
const mitskiAudio = document.querySelector("#mitskiaudio");

