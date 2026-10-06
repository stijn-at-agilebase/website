import "./src/css/fonts.css";
import "./src/css/style.css";

UnicornStudio.addScene({
    elementId: "webglLogo", // id of the HTML element to render your scene in (the scene will use its dimensions)
    fps: 60, // frames per second (0-120) [optional]
    scale: 1, // rendering scale, use smaller values for performance boost (0.25-1) [optional]
    dpi: 2, // pixel ratio [optional]
    lazyLoad: true, // will not initialize the scene until it scrolls into view
    filePath: "webgl/agilebase.json", // if youre hosting your own exported json code, point to it here (do not use both filePath and projectId, only one is required)
    altText: "Agilebase", // optional text for SEO, going inside the <canvas> tag
    ariaLabel: "Agilebase", // optional text for the aria-label attribute on the <canvas> element
    production: true, // when true, will hit the global edge CDN, learn more in the help docs
    interactivity: {
        // [optional]
        mouse: {
            disableMobile: false, // disable touch movement on mobile
        },
    },
})
    .then((scene) => {
        // scene is ready
        // To remove a scene, you can use:
        // scene.destroy()
    })
    .catch((err) => {
        //console.error(err);
    });

UnicornStudio.addScene({
    elementId: "webglAvatar", // id of the HTML element to render your scene in (the scene will use its dimensions)
    fps: 60, // frames per second (0-120) [optional]
    scale: 1, // rendering scale, use smaller values for performance boost (0.25-1) [optional]
    dpi: 2, // pixel ratio [optional]
    lazyLoad: true, // will not initialize the scene until it scrolls into view
    filePath: "webgl/stijn.json", // if youre hosting your own exported json code, point to it here (do not use both filePath and projectId, only one is required)
    altText: "Agilebase", // optional text for SEO, going inside the <canvas> tag
    ariaLabel: "Agilebase", // optional text for the aria-label attribute on the <canvas> element
    production: true, // when true, will hit the global edge CDN, learn more in the help docs
    interactivity: {
        // [optional]
        mouse: {
            disableMobile: true, // disable touch movement on mobile
        },
    },
})
    .then((scene) => {
        // scene is ready
        // To remove a scene, you can use:
        // scene.destroy()
    })
    .catch((err) => {
        //console.error(err);
    });

const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
];

let konamiIndex = 0;

document.addEventListener("keydown", (event) => {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateKonamiCode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateKonamiCode() {
    const konamiDiv = document.createElement("div");
    konamiDiv.classList.add("konami");

    // add image honda.gif
    const konamiImg = document.createElement("img");
    konamiImg.src = "/images/honda.gif";
    konamiImg.alt = "Konami";

    // audio autoplay
    const konamiAudio = document.createElement("audio");
    konamiAudio.src = "/libs/konami.mp3";
    konamiAudio.autoplay = true;
    konamiAudio.loop = true;

    konamiDiv.appendChild(konamiImg);

    document.body.appendChild(konamiDiv);
}




