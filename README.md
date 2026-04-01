# New Release on 2026 webportfolio v1.1.4
![Banner](/public/img/banner/websiteportfoliov1.1.4.webp)

### Features in `v1.1.4`
- add Blog site and update Script by [@JosephMorales28](https://github.com/JosephMorales28)
- fixed bugs on script by [@JosephMorales28](https://github.com/JosephMorales28)

### Authors and Buy me a Coffee

[@JosephMorales28](https://github.com/JosephMorales28)

### Installation
click the Assets on the release version of v1.1.4 in github release or on the code button Download ZIP release version of `v1.1.4`

### Run on Browser
Open VsCode Terminal `powershell`
```bash
   npm run dev
```
### Update on `main.js`
```javascript

    else if (window.location.pathname.endsWith("blog.html")){
        const blogTitle="Blog";
        const blogLinks=[
            {label:"Version Patch", href:"/version_patch.html"},
            {label:"Community", href:"/community.html"}
        ];
        const versionpatch=["v1.1.5","v1,1,4","v1.1.3","v1.1.2","v1.1.1","v1.1.0"];
        const blogversion=[
                          {patch:"v1.1.5",name:"Update patch changes"},
                          {patch:"v1.1.4",name:"Add blog site"},
                          {patch:"v1.1.3",name:"Add Section tag"},
                          {patch:"v1.1.2",name:"Font Changes"},
                          {patch:"v1.1.1",name:"Form Tag on Index"},
                          {patch:"v1.1.0",name:"Upgrade Website portfolio"}
        ];

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
                       <figure>
                          <picture>
                             <source srcset="./img/banner/websiteportfoliov1.1.5.webp" type="image/webp">
                             <img src="./img/banner/websiteportfoliov1.1.5.webp" alt="banner" loading="lazy" fetchpriority="high">
                          </picture>
                          <figcaption>Release version of ${versionpatch[0]}</figcaption>
                       </figure>
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
```
