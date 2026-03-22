export const footername = "Joseph Morales";

const imagesrc = [
    "../img/icons/behance.svg",
    "../img/icons/github.svg"
];

const privacypolicy = "Privacy Policy by TermsFeed";

document.querySelector(".footer").innerHTML = `
    <p>Copyrights &copy; ${footername}</p>
    ${imagesrc
        .map(src => `
            <img 
                src="${src}" 
                alt="${src} icon" 
                loading="lazy" 
                fetchpriority="low"
            >
        `)
        .join("")}
    <a href="/privacy.html">${privacypolicy}</a>
`;
