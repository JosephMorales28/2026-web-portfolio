import { exp_nav_func } from "../js/nav.js";
import { exp_main_func } from "../js/main.js";
import { exp_section_func } from "./section.js";

document.body.insertAdjacentHTML("beforeend", exp_nav_func());
console.log(exp_nav_func());
document.body.insertAdjacentHTML("beforeend", exp_main_func());
console.log(exp_main_func());
document.body.insertAdjacentHTML("beforeend",exp_section_func());
console.log(exp_section_func());
