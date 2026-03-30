var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=`Joseph Morales`,r=[`../img/icons/behance.svg`,`../img/icons/github.svg`],i=`Privacy Policy by TermsFeed`;document.querySelector(`.footer`).innerHTML=`
    <p>Copyrights &copy; ${n}</p>
    ${r.map(e=>`
            <img 
                src="${e}" 
                alt="${e} icon" 
                loading="lazy" 
                fetchpriority="low"
            >
        `).join(``)}
    <a href="/privacy.html">${i}</a>
`;function a(){return window.location.pathname===`/`||window.location.pathname.endsWith(`index.html`)?`
         <nav role="navigation">
                <div class="profile">
                   <div class="profile-pic">
                       <picture>
                           <source srcset="../img/joseph2026_150x150.webp" media="(max-width:150px)" type="image/webp">
                           <source srcset="../img/joseph2026_300x300.webp" media="(max-width:300px)" type="image/webp">
                           <img src="../img/joseph2026_300x300.webp" alt="profile picture" fetchpriority="high">
                       </picture>
                   </div>
                   <div class="profile-info">
                       <h1>Joseph Anthony V. Morales</h1>
                       <h2>Web Development | Graphic Design</h2>
                       <p>Hi, I'm Joseph, a passionate web developer and graphic designer based in the Philippines.</p>
                   </div>
                </div>
        </nav>
    `:(window.location.pathname.endsWith(`about.html`)||window.location.pathname.endsWith(`project.html`)||window.location.pathname.endsWith(`service.html`)||window.location.pathname.endsWith(`blog.html`)||window.location.pathname.endsWith(`contact.html`),``)}var o=e((()=>{}));function s(){if(window.location.pathname===`/`||window.location.pathname.endsWith(`index.html`)){let e=`My First Project`,t=`This is my first project in web development and graphic design`,n=`visit`;return`
            <main role="main">
                <h1 id="projects">My Portfolio</h1>
                <div class="portfolio-section">
                    <div class="portfolio-img">
                        <picture>
                           <source srcset="img/sample.webp" type="image/webp">
                           <img src="img/sample.webp" alt="projects picture" loading="lazy" fetchpriority="high">
                        </picture>
                    </div>
                    <div class="portfolio-description">
                       <h2>${e}</h2>
                       <p>${t}</p></br>
                       <a href="#">${n}</a>
                    </div>
                </div>

                <div class="portfolio-section">
                    <div class="portfolio-img">
                        <picture>
                           <source srcset="img/sample.webp" type="image/webp">
                           <img src="img/sample.webp" alt="projects picture" loading="lazy" fetchpriority="high">
                        </picture>
                    </div>
                    <div class="portfolio-description">
                       <h2>${e}</h2>
                       <p>${t}</p></br>
                       <a href="#">${n}</a>
                    </div>
                </div>

                <div class="portfolio-section">
                    <div class="portfolio-img">
                        <picture>
                           <source srcset="img/sample.webp" type="image/webp">
                           <img src="img/sample.webp" alt="projects picture" loading="lazy" fetchpriority="high">
                        </picture>
                    </div>
                    <div class="portfolio-description">
                       <h2>${e}</h2>
                       <p>${t}</p></br>
                       <a href="#">${n}</a>
                    </div>
                </div>
            </main>
         `}else if(window.location.pathname.endsWith(`about.html`))return`
            <main role="main">
                <h1 id="about">About Me</h1>
                <p>Hello! I'm a passionate web developer and graphic designer with a love for creating visually stunning and user-friendly websites. With a background in both design and coding, I bring a unique perspective to every project I work on. When I'm not coding, you can find me exploring the latest design trends or experimenting with new graphic design techniques.</p>
            </main>
        `;else if(window.location.pathname.endsWith(`project.html`))return`
            <main role="main">
                <h1 id="projects">My Projects</h1>
                <p>Welcome to my projects page! Here, you'll find a curated selection of my work in web development and graphic design. Each project showcases my skills, creativity, and dedication to delivering high-quality results. Feel free to explore and reach out if you'd like to collaborate or learn more about my work.</p>
            </main>
        `;else if(window.location.pathname.endsWith(`service.html`))return`
            <main role="main">
                <h1 id="services">My Services</h1>
                <p>I offer a range of services in web development and graphic design, including custom website design, responsive web development, logo design, branding, and more. Whether you're looking to create a new website from scratch or revamp an existing one, I have the skills and experience to bring your vision to life. Let's work together to create something amazing!</p>
            </main>
        `;else if(window.location.pathname.endsWith(`blog.html`)){let e=[{label:`Version Patch`,href:`/version_patch.html`},{label:`Community`,href:`/community.html`}],t=[`v1.1.4`,`v1.1.3`,`v1.1.2`,`v1.1.1`,`v1.1.0`],n=e.map(e=>`<li><a href="${e.href}">${e.label}</a></li>`).join(``),r=t.map(e=>`<li>${e}</li>`).join(``);return`
           <main role="main">
              <div id="blog">
                 <h1>Blog</h1>
                 <ul id="blogmenu">
                    ${n}
                 </ul>
                 <div id="bloggrid">
                    <div id="blogleft">
                       <figure>
                          <picture>
                             <source srcset="img/banner/websiteportfoliov1.1.4.webp" type="image/webp">
                             <img src="img/banner/websiteportfoliov1.1.4.webp" alt="banner" loading="lazy" fetchpriority="high">
                          </picture>
                          <figcaption>Release version of ${t[0]}</figcaption>
                       </figure>
                       <h2>Features:</h2>
                       <p>- add blog site and update the script.</p>
                       <p>- fix error bug script.</p>
                       <h2>Screenshot:</h2>
                       <figure>
                          <picture>
                             <source srcset="img/banner/screenshot_v1.1.4.webp" type="image/webp">
                             <img src="img/banner/screenshot_v1.1.4.webp" alt="banner" loading="lazy" fetchpriority="high">
                          </picture>
                          <figcaption>Screenshot version of ${t[0]}</figcaption>
                       </figure>
                    </div>
                    <div id="blogright">
                        <h2>Version List:</h2>
                        <ul>
                            ${r}
                        </ul>
                    </div>
              </div>
           </main>
        `}else if(window.location.pathname.endsWith(`contact.html`))return`
            <main role="main">
                <h1 id="contact">Contact Me</h1>
                <p>I'd love to hear from you! Whether you have a question about my services, want to discuss a potential project, or just want to say hello, feel free to reach out. You can contact me via email at <a href='https://gmail.com/'>josephmo2893@gmail.com</a> or connect with me on social media. I look forward to connecting with you!</p>
            </main>
        `;return``}var c=e((()=>{}));function l(){if(window.location.pathname===`/`||window.location.pathname===`/index.html`){let e=[`Visual Studio Code`,`Adobe Photoshop`,`Figma`,`Canva by Affinity`],t=[`Visual Studio Code is a powerful code editor developed by Microsoft. It offers a wide range of features, including syntax highlighting, code completion, and integrated terminal support. With its extensive library of extensions, developers can customize their coding environment to suit their needs.`,`Adobe Photoshop is a widely used graphic design software that allows users to create and edit images with precision. It offers a variety of tools for photo manipulation, digital painting, and graphic design. With its powerful features, Photoshop is a go-to choice for designers and artists worldwide.`,`Figma is an open-source design tool that allows teams to collaborate on UI/UX design projects. It provides features for creating wireframes, prototypes, and design systems. With its collaborative capabilities and support for multiple design tools, Penpot is a valuable resource for designers and developers working in agile environments.`,`Canva by Affinity is a powerful design tool that allows users to create professional designs with ease. It offers a wide range of templates, graphics, and design elements that make it simple to create visually appealing content for social media, presentations, and marketing materials.`],n=[`../img/icons/visualstudiocode.svg`,`../img/icons/adobephotoshop.svg`,`../img/icons/figma.svg`,`../img/icons/canvaapp.svg`],r=``;for(let i=0;i<e.length;i++)r+=`
                  <div class="software-item">
                     <h2><img src="${n[i]}" alt="${n[i]}" loading="lazy" fetchpriority="high">  ${e[i]}</h2>
                     <p>${t[i]}</p>
                  </div>
            `;return`
        <section>
              <h1>Software I Used</h1>
              <div class="software-list">
                 ${r}
              </div>
        </section>
        `}else if(window.location.pathname===`/about.html`)return`

        `;else if(window.location.pathname===`/project.html`)return`
             
        `;else if(window.location.pathname===`/service.html`)return`
           <section>
           <h1>Basic Plan</h1>
           <h1>Front-End Plan</h1>
           <h1>Developer plan</h1>
           </section>
        `;else if(window.location.pathname===`/contact.html`)return`
        
        `;else if(window.location.pathname.endsWith(`blog.html`))return`
        
        `;return``}var u=e((()=>{}));t((()=>{o(),c(),u(),document.getElementById(`app`).innerHTML=a()+s()+l()}))();