import { tabHome } from "./home";

export const makeHeader = (text, name) => {
  const h2 = document.createElement("h2");
  h2.textContent = text;
  h2.className = name;
  return h2;
};

const makeItem = (imgSrc, p, i) => {
  const item = document.createElement("div");
  const img = document.createElement("img");
  img.src = imgSrc;
  img.className = "food";

  const priceContainer = document.createElement("div");
  const inlinePrice = document.createElement("span");
  const mora = document.createElement("img");
  mora.src = imgSrc;
  mora.className = "mora";
  const price = document.createElement("p");
  price.className = "price";
  price.textContent = p;

  const info = document.createElement("p");
  info.textContent = i;

  inlinePrice.append(mora, price);
  priceContainer.append(inlinePrice);

  item.append(img, priceContainer, info);

  return item;
};

const makeMenu = () => {
  const content = document.querySelector("#content");

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  h1.className = "name";
  content.append(h1);

  const drinkItems = {
    item1: {
      1: "../src/assets/angels-share-exterior.png",
      2: "1000",
      3: "something freshhh",
    },
    item2: {
      1: "../src/assets/angels-share-exterior.png",
      2: "200",
      3: "bye",
    },
  };

  const dishItem = {
    item1: {
      1: "../src/assets/angels-share-exterior.png",
      2: "1000",
      3: "food",
    },
    item2: {
      1: "../src/assets/angels-share-exterior.png",
      2: "200",
      3: "food",
    },
  };

  const displayItem = (obj) => {
    Object.values(obj).forEach((item) => {
      content.append(makeItem(item[1], item[2], item[3]));
    });
  };

  content.append(makeHeader("Drinks", "drinks"));

  displayItem(drinkItems);

  content.append(makeHeader("Dishes", "dishes"));

  displayItem(dishItem);
};

// makeMenu();

export function tabMenu() {
  const d = document.querySelector(".menu");
  const content = document.querySelector("#content");
  d.addEventListener("click", () => {
    content.innerHTML = "";
    makeMenu();
  });
}

export default makeMenu;
