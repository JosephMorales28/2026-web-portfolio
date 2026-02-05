export function exp_main_func() {
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