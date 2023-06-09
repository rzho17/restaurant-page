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

  const navContainer = document.createElement("div");
  navContainer.className = "navContainer";
  nav.append(navContainer);

  const navTitle = document.createElement("h1");
  navTitle.textContent = "Angel's Share";
  navContainer.append(navTitle);

  const navLogo = document.createElement("img");
  navLogo.src = "assets/noctua_shape.webp";
  navLogo.className = "logo";
  navContainer.appendChild(navLogo);

  const navUl = document.createElement("ul");
  navUl.className = "ul";
  nav.append(navUl);

  navUl.appendChild(createLi("Home", "home"));
  navUl.appendChild(createLi("Menu", "menu"));
  navUl.appendChild(createLi("About", "about"));
};

export const createFooter = () => {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");

  const footer = document.createElement("footer");
  footer.className = "footer";
  const date = new Date();
  const year = date.getFullYear();
  const link = document.createElement("a");
  link.href = "https://github.com/rzho17";
  const makeText = document.createTextNode(`rzho17 ${year}`);
  link.append(makeText);
  footer.append(link);
  body.append(footer);
};

export default createHeader;
