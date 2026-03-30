export function exp_nav_func(){

    if ( window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {

    const myName="Joseph Anthony V. Morales";
    const myPosition="Web Development | Graphic Design";
    const myBio="Hi, I'm Joseph, a passionate web developer and graphic designer based in the Philippines.";
    const imgAlt="profile picture";
    
    return `
         <nav role="navigation">
                <div class="profile">
                   <div class="profile-pic">
                       <picture>
                           <source srcset="./img/joseph2026_150x150.webp" media="(max-width:150px)" type="image/webp">
                           <source srcset="./img/joseph2026_300x300.webp" media="(max-width:300px)" type="image/webp">
                           <img src="./img/joseph2026_300x300.webp" alt="${imgAlt}" fetchpriority="high">
                       </picture>
                   </div>
                   <div class="profile-info">
                       <h1>${myName}</h1>
                       <h2>${myPosition}</h2>
                       <p>${myBio}</p>
                   </div>
                </div>
        </nav>
    `;
   }
   else if (window.location.pathname.endsWith("about.html")){
    return "";
   }
   else if (window.location.pathname.endsWith("project.html")){
    return "";
   }
   else if (window.location.pathname.endsWith("service.html")){
    return "";
   }
   else if (window.location.pathname.endsWith("blog.html")){
    return "";
   }
   else if (window.location.pathname.endsWith("contact.html")){
    return "";
   }
return "";
}