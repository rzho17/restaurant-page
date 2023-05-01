import createHeader from "./initial-load";
import makeMenu from "./menu";
import makeAbout from "./about";
import { tabHome } from "./home";
import { tabMenu } from "./menu";
import { tabAbout } from "./about";

createHeader();
// makeMenu();

// makeAbout();

tabHome();
tabMenu();
tabAbout();
