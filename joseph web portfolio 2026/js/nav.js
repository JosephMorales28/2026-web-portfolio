export function exp_nav_func(){
    const myName="Joseph Anthony V. Morales";
    const myPosition="Web Development | Graphic Design";
    const myBio="Hi, I'm Joseph, a passionate web developer and graphic designer based in the Philippines.";
    const imgAlt="profile picture";
    
    return `
         <nav role="navigation">
                <picture>
                        <source srcset="../img/joseph2026.webp" type="image/webp">
                        <img src="../img/joseph2026.webp" alt="${imgAlt}" loading="lazy" fetchpriority="high">
                </picture>
                <h1>${myName}</h1>
                <h2>${myPosition}</h2>
                <p>${myBio}</p>
        </nav>
    `;
}