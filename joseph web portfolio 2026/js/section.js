export function exp_section_func(){

    if(window.location.pathname==="/" || window.location.pathname===("/index.html")){
       
       const softwarelist=[
           "Visual Studio Code",
           "Adobe Photoshop",
           "Figma",
           "Canva by Affinity"
        ];

       const softwareparagraph=[
           "Visual Studio Code is a powerful code editor developed by Microsoft. It offers a wide range of features, including syntax highlighting, code completion, and integrated terminal support. With its extensive library of extensions, developers can customize their coding environment to suit their needs.",
           "Adobe Photoshop is a widely used graphic design software that allows users to create and edit images with precision. It offers a variety of tools for photo manipulation, digital painting, and graphic design. With its powerful features, Photoshop is a go-to choice for designers and artists worldwide.",
           "Figma is an open-source design tool that allows teams to collaborate on UI/UX design projects. It provides features for creating wireframes, prototypes, and design systems. With its collaborative capabilities and support for multiple design tools, Penpot is a valuable resource for designers and developers working in agile environments.",
           "Canva by Affinity is a powerful design tool that allows users to create professional designs with ease. It offers a wide range of templates, graphics, and design elements that make it simple to create visually appealing content for social media, presentations, and marketing materials."
        ];

        const softwareicon=[
            "../img/icons/visualstudiocode.svg",
            "../img/icons/adobephotoshop.svg",
            "../img/icons/figma.svg",
            "../img/icons/canvaapp.svg"
        ]

        let itemsHTML='';
        for (let i=0; i< softwarelist.length;i++) {
            itemsHTML +=`
                  <div class="software-item">
                     <h2><img src="${softwareicon[i]}" alt="${softwareicon[i]}" loading="lazy" fetchpriority="high">  ${softwarelist[i]}</h2>
                     <p>${softwareparagraph[i]}</p>
                  </div>
            `;
        }
        return `
        <section>
              <h1>Software I Used</h1>
              <div class="software-list">
                 ${itemsHTML}
              </div>
        </section>
        `;
    }

    else if(window.location.pathname===("/about.html")){
        return`

        `;
    }

    else if(window.location.pathname===("/project.html")){
        return`
        
        `;
    }

    else if(window.location.pathname===("/service.html")){
        return`
        
        `;
    }

    else if(window.location.pathname===("/contact.html")){
        return`
        
        `;
    }
}