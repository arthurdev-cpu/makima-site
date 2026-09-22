const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* Pequena animação de entrada */

const animatedElements = [
    ...document.querySelectorAll(
        ".card, .ai-card, .contact-card"
    )
];

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );

animatedElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(18px)";

    element.style.transition =
        "opacity .5s ease, transform .5s ease, border-color .25s ease";

    observer.observe(element);
});


const style =
    document.createElement("style");

style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);
