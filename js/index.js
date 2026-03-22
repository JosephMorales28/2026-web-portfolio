import { exp_nav_func } from "../js/nav.js";
import { exp_main_func } from "../js/main.js";
import { exp_section_func } from "./section.js";

// If nav should go somewhere specific, insert it properly.
// But DO NOT inject directly into body unless intentional.

document.getElementById("app").innerHTML =
    exp_nav_func() +
    exp_main_func() +
    exp_section_func();