import { blueBorder } from "./functions/blueBorder.js";

let choice = "";
const continueButton = document.querySelector(".continue-button");
let clickedElement = null; // Uchovává referenci na posledně kliknutý element
let count = 0;
const box1 = document.querySelector(".option-1");
const box2 = document.querySelector(".option-2");
const box3 = document.querySelector(".option-3");
const infoBoxText = document.querySelector(".info-box-text");

document.addEventListener("click", function (event) {
    let currentElement = event.target;

    // Projdeme strom DOM nahoru, dokud nenajdeme element s třídou option-1, option-2, nebo option-3
    while (currentElement && currentElement !== document.body) {
        if (
            currentElement.classList &&
            (currentElement.classList.contains("option-1") ||
                currentElement.classList.contains("option-2") ||
                currentElement.classList.contains("option-3"))
        ) {
            if (clickedElement) {
                // Odstraníme třídu 'clicked-box' z předchozího kliknutého elementu
                clickedElement.classList.remove("clicked-box");
            }
            // Nastavíme novou volbu a kliknutý element
            choice = currentElement.classList.contains("option-1")
                ? "sbirkobox"
                : currentElement.classList.contains("option-2")
                ? "vyzvednuti"
                : "adresa";
            clickedElement = currentElement;

            // Přidáme třídu 'clicked-box' k aktuálně kliknutému elementu
            clickedElement.classList.add("clicked-box");

            continueButton.style.backgroundColor = "#0080dd";
            continueButton.style.cursor = "pointer";
            count += 1;
            break; // Ukončíme smyčku po úpravě tříd
        } else {
            if (
                (continueButton.style.backgroundColor = "#0080dd" && count > 0)
            ) {
                continueButton.style.backgroundColor = "#0080dd";
            }
        }
        currentElement = currentElement.parentElement;
    }
});

continueButton.addEventListener("click", (e) => {
    if (choice === "sbirkobox") {
        window.open(
            "https://docs.google.com/forms/d/16HbJBoBY3qsyid9ahYzt9gaSSzc1nzgdm_6057drOIQ"
        );
    } else if (choice === "vyzvednuti") {
        window.open(
            "https://docs.google.com/forms/d/1dx294ZYE8GM-3rqvARGqWk24mh76SYPOxlFz9PFRO1w"
        );
    } else if (choice === "adresa") {
        window.open(
            "https://docs.google.com/forms/d/1rEgj6TyDJORS9xbSmjQwYgXfmGZ3FHMCrSWOGLr9stY"
        );
    } else {
        console.log("Neplatný odkaz!");
    }
});

blueBorder(box1);
blueBorder(box2);
blueBorder(box3);

let smallText = "Na zprovoznění plnohodnotného eshopu se pracuje...";
let bigText =
    "Na zprovoznění plnohodnotného eshopu se pracuje. V tuto chvíli je možné sbírky právních předpisů objednat prostřednictvím google formulářů. Níže vyber způsob vyzvednutí nebo doručení, následně se přes tlačítko „pokračovat“ dostaneš do příslušného google formuláře. Potvrzovací SMS o uhrazení kupní ceny rozesílám jen v případě vyzvednutí sbírky do obecné části správního práva v budově PrF MUNI (jinou sbírku takto zatím vyzvednout nejde). V ostatních případech sbírku jen bez dalšího odešlu – a to zpravidla do druhého dne.";

let wantMore = document.createElement("span");
wantMore.textContent = " Zobrazit víc";
wantMore.style.fontWeight = "bold";
wantMore.style.cursor = "pointer";

if (document.body.clientWidth < 650) {
    infoBoxText.textContent = `${smallText}`;
    let br = document.createElement("br");
    infoBoxText.appendChild(br);
    infoBoxText.appendChild(wantMore);
} else {
    infoBoxText.textContent = `${smallText}`;
    let br = document.createElement("br");
    infoBoxText.appendChild(br);
    infoBoxText.appendChild(wantMore);
}

window.addEventListener("resize", (e) => {
    if (document.body.clientWidth < 650) {
        infoBoxText.textContent = `${smallText}`;
        let br = document.createElement("br");
        infoBoxText.appendChild(br);
        infoBoxText.appendChild(wantMore);
    } else {
        infoBoxText.textContent = `${smallText}`;
        let br = document.createElement("br");
        infoBoxText.appendChild(br);
        infoBoxText.appendChild(wantMore);
    }
});

wantMore.addEventListener("click", (e) => {
    infoBoxText.textContent = `${bigText}`;
});
