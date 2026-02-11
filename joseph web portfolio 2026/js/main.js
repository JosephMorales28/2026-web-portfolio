export function exp_main_func(){
    if(window.location.pathname.endsWith("index.html")){
        const myTitle="My Portfolio";
        const myDescription="My First Project";
        const myParagraph="This is my first project in web development and graphic design";
        const imgAlt="projects picture";
        const project_link="&#1057;";
        
        return `
            <main role="main">
                <h1 id="projects">${myTitle}</h1>
                <div class="portfolio-section">
                    <div class="portfolio-img">
                        <picture>
                           <source srcset="#" type="image/jpg">
                           <img src="#" alt="projects picture" loading="lazy" fetchpriority="high">
                        </picture>
                    </div>
                    <div class="portfolio-description">
                       <h2>${myDescription}</h2>
                       <p>${myParagraph}</p>
                    </div>
                    <div class="portfolio-link">
                        <a href="#">${project_link}</a>
                    </div>
                </div>

                <div class="portfolio-section">
                    <div class="portfolio-img">
                        <picture>
                           <source srcset="#" type="image/jpg">
                           <img src="#" alt="projects picture" loading="lazy" fetchpriority="high">
                        </picture>
                    </div>
                    <div class="portfolio-description">
                       <h2>${myDescription}</h2>
                       <p>${myParagraph}</p>
                    </div>
                    <div class="portfolio-link">
                        <a href="#">${project_link}</a>
                    </div>
                </div>

                <div class="portfolio-section">
                    <div class="portfolio-img">
                        <picture>
                           <source srcset="#" type="image/jpg">
                           <img src="#" alt="projects picture" loading="lazy" fetchpriority="high">
                        </picture>
                    </div>
                    <div class="portfolio-description">
                       <h2>${myDescription}</h2>
                       <p>${myParagraph}</p>
                    </div>
                    <div class="portfolio-link">
                        <a href="#">${project_link}</a>
                    </div>
                </div>
            </main>
         `;
    }
    else if(window.location.pathname.endsWith("about.html")){
        const aboutTitle="About Me";
        const aboutParagraph="Hello! I'm a passionate web developer and graphic designer with a love for creating visually stunning and user-friendly websites. With a background in both design and coding, I bring a unique perspective to every project I work on. When I'm not coding, you can find me exploring the latest design trends or experimenting with new graphic design techniques.";
        return `
            <main role="main">
                <h1 id="about">${aboutTitle}</h1>
                <p>${aboutParagraph}</p>
            </main>
        `;
    }
}
