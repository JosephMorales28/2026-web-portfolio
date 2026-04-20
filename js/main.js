export function exp_main_func(){
    if ( window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
       const myTitle = "My Portfolio";

       const projects = [
                         {
                            title: "Masterpiece Apparel",
                            paragraph: "This is my first project in web development and graphic design",
                            img: "./img/sample.webp",
                            alt: "Masterpiece Apparel picture",
                            link: "#"
                         },
                         {
                            title: "My Second Project",
                            paragraph: "This is my Second project in web development and graphic design",
                            img: "./img/sample.webp",
                            alt: "Second Project picture",
                            link: "#"
                         },
                         {
                            title: "My Third Project",
                            paragraph: "This is my third project in web development and graphic design",
                            img: "./img/sample.webp",
                            alt: "Third Project picture",
                            link: "#"
                         }
                        ];

      const projectsections = projects.map(project => `
            <div class="portfolio-section">
                <div class="portfolio-img">
                    <picture>
                             <source srcset="${project.img}" type="image/webp">
                             <img src="${project.img}" alt="${project.alt}" loading="lazy" fetchpriority="high">
                    </picture>
                </div>
                <div class="portfolio-description">
                     <h2>${project.title}</h2>
                     <p>${project.paragraph}</p></br>
                     <a href="${project.link}">Visit &rarr;</a>
                </div>
            </div>
      `).join("");

      return `
              <main role="main">
                    <h1 id="projects">${myTitle}</h1>
                    ${projectsections}
              </main>
             `;
    }
    else if(window.location.pathname.endsWith("about.html")){
        const aboutimg=[
                         {
                            image:"aboutbanner.webp",
                            alt:"aboutbanner",
                            loading:"lazy",
                            fetchpriority: "high"
                         }
                        ];

        const aboutsection=aboutimg.map(img=>`
               <picture>
                  <source srcset="/img/banner/${img.image}" type="image/webp">
                  <img src="/img/banner/${img.image}" alt="${img.alt}" loading="${img.loading}" fetchpriority="${img.fetchpriority}">
               </picture>
            `).join("");
        
        const aboutTitle="About Me";
        const aboutParagraph="Hello, I'm Joseph! I'm a passionate web developer and graphic designer with a love for creating visually stunning and user-friendly websites. With a background in both design and coding, I bring a unique perspective to every project I work on. When I'm not coding, you can find me exploring the latest design trends or experimenting with new graphic design techniques.";
        
        return `
            <main role="main">
                   ${aboutsection}
                <h1 id="about">${aboutTitle}</h1>
                <p>${aboutParagraph}</p>
            </main>
        `;
    }
    else if(window.location.pathname.endsWith("project.html")){
        const projectTitle="My Projects";
        const projectParagraph="Welcome to my projects page! Here, you'll find a curated selection of my work in web development and graphic design. Each project showcases my skills, creativity, and dedication to delivering high-quality results. Feel free to explore and reach out if you'd like to collaborate or learn more about my work.";
        return `
            <main role="main">
                <h1 id="projects">${projectTitle}</h1>
                <p>${projectParagraph}</p>
            </main>
        `;
    }
    else if (window.location.pathname.endsWith("service.html")){
        const serviceTitle="My Services";
        const serviceParagraph="I offer a range of services in web development and graphic design, including custom website design, responsive web development, logo design, branding, and more. Whether you're looking to create a new website from scratch or revamp an existing one, I have the skills and experience to bring your vision to life. Let's work together to create something amazing!";
        return `
            <main role="main">
                <h1 id="services">${serviceTitle}</h1>
                <p>${serviceParagraph}</p>
            </main>
        `;
    }
    else if (window.location.pathname.endsWith("blog.html")){
        const blogTitle="Blog";
        const blogLinks=[
            {label:"Version Patch", href:"/version_patch.html"},
            {label:"Community", href:"/community.html"}
        ];
        const versionpatch=["v1.1.5","v1.1.4","v1.1.3","v1.1.2","v1.1.1","v1.1.0"];
        const blogversion=[
                          {patch:"v1.1.5",name:"Update patch changes"},
                          {patch:"v1.1.4",name:"Add blog site"},
                          {patch:"v1.1.3",name:"Add Section tag"},
                          {patch:"v1.1.2",name:"Font Changes"},
                          {patch:"v1.1.1",name:"Form Tag on Index"},
                          {patch:"v1.1.0",name:"Upgrade Website portfolio"}
        ];
        
        const releaseversion=[
                              {
                                version:"v1.1.5",
                                img:"./img/banner/websiteportfoliov1.1.5.webp",
                                alt:"bannerv1.1.5",
                                loading:"lazy",
                                fetchpriority:"high"
                              }           
        ];
        let releaseHTML='';
        for(let release=0;release < releaseversion.length;release++){
            releaseHTML+=`
                       <figure>
                          <picture>
                             <source srcset="${releaseversion[release].img}" type="image/webp">
                             <img src="${releaseversion[release].img}" alt="${releaseversion[release].alt}" loading="${releaseversion[release].loading}" fetchpriority="${releaseversion[release].fetchpriority}">
                          </picture>
                          <figcaption>Release version of ${releaseversion[release].version}</figcaption>
                       </figure>
            `;
        }
        const blogMenuItems=blogLinks.map((item)=>{
            return `<li><a href="${item.href}">${item.label}</a></li>`;
        }).join("");

        const blogversionlist=blogversion.map((item)=>{
            return `<li><div id="versionlist">
                            <code style="align-self:flex-start">${item.patch}</code>
                            <div id="title_author">
                               <h3>- ${item.name}</h3>
                               <p> Joseph Morales</p>
                            </div></div>
                    </li>`;
        }).join("");
        
        return `
           <main role="main">
              <div id="blog">
                 <h1>${blogTitle}</h1>
                 <ul id="blogmenu">
                    ${blogMenuItems}
                 </ul>
                 <div id="bloggrid">
                    <div id="blogleft">
                       ${releaseHTML}
                       <h2>Patch Changes:</h2>
                       <p>- Update blog style and version list.</p>
                       <p>- Fix error bug script.</p>
                       <p>- Add new .htaccess file</p>
                       <p>- Update README.md</p>
                       <p>- Relocate Folders for image and fonts</p>
                       <h2>Screenshot:</h2>
                       <figure>
                          <picture>
                             <source srcset="./img/banner/screenshot_v1.1.5.webp" type="image/webp">
                             <img src="./img/banner/screenshot_v1.1.5.webp" alt="banner" loading="lazy" fetchpriority="high">
                          </picture>
                          <figcaption>Screenshot version of ${versionpatch[0]}</figcaption>
                       </figure>
                       <figure>
                          <picture>
                             <source srcset="./img/banner/websiteportfoliov1.1.4.webp" type="image/webp">
                             <img src="./img/banner/websiteportfoliov1.1.4.webp" alt="banner" loading="lazy" fetchpriority="high">
                          </picture>
                          <figcaption>Release version of ${versionpatch[1]}</figcaption>
                       </figure>
                       <h2>Features:</h2>
                       <p>- add blog site and update the script.</p>
                       <p>- fix error bug script.</p>
                       <h2>Screenshot:</h2>
                       <figure>
                          <picture>
                             <source srcset="./img/banner/screenshot_v1.1.4.webp" type="image/webp">
                             <img src="./img/banner/screenshot_v1.1.4.webp" alt="banner" loading="lazy" fetchpriority="high">
                          </picture>
                          <figcaption>Screenshot version of ${versionpatch[1]}</figcaption>
                       </figure>
                    </div>
                    <div id="blogright">
                        <h2>Version List:</h2>
                        <ul>
                            ${blogversionlist}
                        </ul>
                    </div>
              </div>
           </main>
        `;
    }
    else if (window.location.pathname.endsWith("contact.html")){
        const contactTitle="Contact Me";
        const contactParagraph="I'd love to hear from you! Whether you have a question about my services, want to discuss a potential project, or just want to say hello, feel free to reach out. You can contact me via email at <a href='https://gmail.com/'>josephmo2893@gmail.com</a> or connect with me on social media. I look forward to connecting with you!";
        return `
            <main role="main">
                <h1 id="contact">${contactTitle}</h1>
                <p>${contactParagraph}</p>
            </main>
        `;
    }

    return "";
}
