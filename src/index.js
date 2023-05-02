import createHeader from "./initial-load";
import { createFooter } from "./initial-load";

import { tabHome, homeContent } from "./home";
import { tabMenu } from "./menu";
import { tabAbout } from "./about";

createHeader();
homeContent();
createFooter();

tabHome();
tabMenu();
tabAbout();
