export function blueBorder(element) {
    element.addEventListener("mouseenter", (e) => {
        element.classList.add("blue-border");
    });

    element.addEventListener("mouseleave", (e) => {
        element.classList.remove("blue-border");
    });
}


