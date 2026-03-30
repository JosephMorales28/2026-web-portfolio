import { defineConfig } from "vite";

export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                main:'index.html',
                about:'about.html',
                project:'project.html',
                service:'service.html',
                blog:'blog.html',
                contact:'contact.html',
                privacy:'privacy.html'
            }
        }
    }
});