import homeContent from "./home";

//create module function to create basic layout for page that other pages import from as well
const createLi = (text, name) => {
  const li = document.createElement("li");
  li.textContent = text;
  li.className = name;
  return li;
};

const createHeader = () => {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  header.className = "header";
  body.insertBefore(header, content);

  const nav = document.createElement("nav");
  nav.className = "nav";
  header.append(nav);

  const navLogo = document.createElement("img");
  navLogo.src = "../src/assets/angels-share-exterior.png";
  navLogo.className = "logo";
  nav.appendChild(navLogo);

  const navUl = document.createElement("ul");
  navUl.className = "ul";
  nav.append(navUl);

  navUl.appendChild(createLi("Home", "home"));
  navUl.appendChild(createLi("Menu", "menu"));
  navUl.appendChild(createLi("About", "about"));
};

//displays initial load
// homeContent();

export default createHeader;
