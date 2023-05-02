import { makeHeader } from "./menu";
import { createP } from "./home";

const makeH3 = (text, name) => {
  const h3 = document.createElement("h3");
  h3.textContent = text;
  h3.className = name;
  return h3;
};

const makeAbout = () => {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.className = "container";
  //   container.append(makeHeader("About", ""));
  const h1 = document.createElement("h1");
  h1.textContent = "About";
  h1.className = "name";
  container.append(h1);

  const ownerPic = document.createElement("img");
  ownerPic.className = "owner";
  ownerPic.src = "../src/assets/angels-share-exterior.png";
  container.append(ownerPic);

  container.append(createP("something about owner"));

  container.append(makeH3("Contact", "aboutInfo"));
  container.append(createP("phone:(555-555-5555)"));

  container.append(makeH3("Email", "aboutInfo"));
  container.append(createP("something@gmail.com"));

  container.append(makeH3("Hours", "aboutInfo"));
  container.append(createP("Dusk till Dawn 7 Days A Week"));

  container.append(makeH3("Location", "aboutInfo"));
  const locationPic = document.createElement("img");
  locationPic.className = "owner";
  locationPic.src = "../src/assets/angels-share-exterior.png";
  container.append(locationPic);

  content.append(container);
};

export function tabAbout() {
  const d = document.querySelector(".about");
  const content = document.querySelector("#content");
  d.addEventListener("click", () => {
    content.innerHTML = "";
    makeAbout();
  });
}

export default makeAbout;
