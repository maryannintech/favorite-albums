function interactAlbum(action, audio) {
    if (action === "click") {
        audio.play();
    }
    else if (action === "mouseout") {
        audio.pause();
    }
}

const mitskiIMG = document.querySelector(".mitski");
mitskiIMG.addEventListener("click", () => {interactAlbum("click", mitskiAudio);});
mitskiIMG.addEventListener("mouseout", () => {interactAlbum("mouseout", mitskiAudio);});
const mitskiAudio = document.querySelector("#mitskiaudio");

const tylerIMG = document.querySelector(".tyler");
tylerIMG.addEventListener("click", () => {interactAlbum("click", tylerAudio);})
tylerIMG.addEventListener("mouseout", () => {interactAlbum("mouseout", tylerAudio);})
const tylerAudio = document.querySelector("#tyleraudio");

const mcrIMG = document.querySelector(".mcr");
mcrIMG.addEventListener("click", () => {interactAlbum("click", mcrAudio);})
mcrIMG.addEventListener("mouseout", () => {interactAlbum("mouseout", mcrAudio);})
const mcrAudio = document.querySelector("#mcraudio");

const beyonceIMG = document.querySelector(".beyonce");
beyonceIMG.addEventListener("click", () => {interactAlbum("click", beyonceAudio);})
beyonceIMG.addEventListener("mouseout", () => {interactAlbum("mouseout", beyonceAudio);})
const beyonceAudio = document.querySelector("#beyonceaudio");


