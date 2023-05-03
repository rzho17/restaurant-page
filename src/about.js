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
  const h2 = document.createElement("h2");
  h2.textContent = "About";
  h2.className = "name";
  container.append(h2);

  const ownerPic = document.createElement("img");
  ownerPic.className = "owner";
  ownerPic.src = "../src/assets/diluc_icon.webp";
  container.append(ownerPic);

  container.append(makeH3("Meet the Owner: Diluc!", "aboutInfo"));
  container.append(
    createP(
      "Born into the affluent Ragnvindr Clan, Diluc is the current owner of the Dawn Winery and a nobleman of high esteem in Mondstadt. While a past incident caused him to split ways with the Knights of Favonius, he continues to protect Mondstadt in his own way."
    )
  );

  container.append(makeH3("Contact", "aboutInfo"));
  container.append(createP("Phone: 555-555-5555"));

  container.append(makeH3("Email", "aboutInfo"));
  container.append(createP("dilucragnvind@ast.com"));

  container.append(makeH3("Hours", "aboutInfo"));
  container.append(createP("Dusk till Dawn 7 Days A Week"));

  container.append(makeH3("Location", "aboutInfo"));
  const locationPic = document.createElement("img");
  locationPic.className = "owner";
  locationPic.src = "../src/assets/map.png";
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
