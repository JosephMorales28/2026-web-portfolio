# New Release on 2026 webportfolio v1.1.4#
![Banner](img/banner/websiteportfoliov1.1.4.webp)

### Features in `v1.1.4`
- add Blog site and update Script by [@JosephMorales28](https:/github.com/JosephMorales28)
- fixed bugs on script by [@JosephMorales28](https:/github.com/JosephMorales28)

### Authors and Buy me a Coffee

[@JosephMorales28](https:/github.com/JosephMorales28)

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

        return `
           <main role="main">
              <h1>${blogTitle}</h1>
              this is blog
           </main>
        `;
    }
```