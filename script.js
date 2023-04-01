const mitskiIMG = document.querySelector(".mitski");
mitskiIMG.addEventListener("click", () => {
    mitskiAudio.play()
});
mitskiIMG.addEventListener("mouseout", () => {
    mitskiAudio.pause()
});
const mitskiAudio = document.querySelector("#mitskiaudio");

const tylerIMG = document.querySelector(".tyler");
tylerIMG.addEventListener("click", () => {
    tylerAudio.play();
})
tylerIMG.addEventListener("mouseout", () => {
    tylerAudio.pause();
})
const tylerAudio = document.querySelector("#tyleraudio");

const mcrIMG = document.querySelector(".mcr");
mcrIMG.addEventListener("click", () => {
    mcrAudio.play();
})
mcrIMG.addEventListener("mouseout", () => {
    mcrAudio.pause();
})
const mcrAudio = document.querySelector("#mcraudio");

const beyonceIMG = document.querySelector(".beyonce");
beyonceIMG.addEventListener("click", () => {
    beyonceAudio.play();
})
beyonceIMG.addEventListener("mouseout", () => {
    beyonceAudio.pause();
})
const beyonceAudio = document.querySelector("#beyonceaudio");