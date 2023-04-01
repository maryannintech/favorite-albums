// AUDIOS
const mitskiAudio = document.querySelector("#mitskiaudio");
const tylerAudio = document.querySelector("#tyleraudio");
const mcrAudio = document.querySelector("#mcraudio");
const beyonceAudio = document.querySelector("#beyonceaudio");

// ALBUM PHOTOS
const mitskiIMG = document.querySelector(".mitski").addEventListener("mouseover", () => {hoverImg(mitskiAudio)});
const tylerIMG = document.querySelector(".tyler").addEventListener("mouseover", () => {hoverImg(tylerAudio)});
const mcrIMG = document.querySelector(".mcr").addEventListener("mouseover", () => {hoverImg(mcrAudio)});
const beyonceIMG = document.querySelector(".beyonce").addEventListener("mouseover",() => {hoverImg(beyonceAudio)});

function hoverImg(audio) {
    if ("mouseover" === true) {
        audio.play();
    }
    else if ("mouseout" === true) {
        audio.pause();
    }
}