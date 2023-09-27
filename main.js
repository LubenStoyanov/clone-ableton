const navLinksNodeList = document.querySelectorAll(".nav-link");
const navElements = document.querySelectorAll(".nav-links");
const navLinksArray = Array.from(navElements);

console.log(navLinksArray);
navLinksArray.forEach((nl) => {
    nl.addEventListener("click", (event) => {
        if (event.target.tagName !== "A") {
            return;
        }
        event.target.classList.add("isActive");
        const nlArray = Array.from(nl.childNodes);
        console.log(nlArray);
        nlArray
            .filter((l) => l.nodeName !== "#text")
            .forEach((l) => {
                console.log(l.innerText, event.target.innerText);
                if (l.innerText !== event.target.innerText) {
                    const link = l.childNodes[0];
                    console.log(l);
                    link.classList.remove("isActive");
                }
            });
    });
});
