import { tabHome } from "./home";

export const makeHeader = (text, name) => {
  const h3 = document.createElement("h3");
  h3.textContent = text;
  h3.className = name;
  return h3;
};

const makeItem = (imgSrc, p, i, alt, name) => {
  const item = document.createElement("div");
  item.className = "itemContainer";
  const itemName = document.createElement("h4");
  itemName.textContent = name;
  itemName.className = "itemName";
  const img = document.createElement("img");
  img.src = imgSrc;
  img.className = "food";
  img.alt = alt;

  const priceContainer = document.createElement("div");
  const inlinePrice = document.createElement("span");
  inlinePrice.className = "priceContainer";
  const mora = document.createElement("img");
  mora.src = "assets/mora.webp";
  mora.className = "mora";
  const price = document.createElement("p");
  price.className = "price";
  price.textContent = p;

  const info = document.createElement("p");
  info.textContent = i;

  inlinePrice.append(mora, price);
  priceContainer.append(inlinePrice);

  item.append(itemName, img, priceContainer, info);

  return item;
};

const makeMenu = () => {
  const content = document.querySelector("#content");
  const container = document.createElement("div");
  container.className = "container foodContainer";

  const h2 = document.createElement("h2");
  h2.textContent = "Menu";
  h2.className = "name";
  container.append(h2);

  const drinkItems = {
    item1: {
      1: "assets/item_apple_cider.webp",
      2: "1500",
      3: "A freshly squeezed, fashionable, and fruity non-alcoholic beverage. Said to have a strong sobering effect, tavern patrons often order this as the last drink of the nigh",
      4: "apple cider",
      0: "Apple Cider",
    },
    item2: {
      1: "assets/item_mint_burst.webp",
      2: "1500",
      3: "A freshly squeezed, fashionable, and fruity non-alcoholic beverage. A refreshing burst of Mint with Berries to sweeten the deal, it has an exquisite aroma.",
      4: "mint burst",
      0: "Mint burst",
    },
    item3: {
      1: "assets/item_sparkling_berry_juice.webp",
      2: "1500",
      3: "An all-new non-alcoholic beverage. Valberries of varying ripeness add layers of sour-to-sweet to this juice while the cooling sparkling water refreshes the soul — a fine companion for a pleasant and leisurely time.",
      4: "sparkling berry juice",
      0: "Sparkling Berry Juice",
    },
    item4: {
      1: "assets/item_Wolfhook_Juice.webp",
      2: "1500",
      3: "A freshly squeezed, fashionable, and fruity non-alcoholic beverage. Iced Wolfhook juice mixed with a pinch of other ingredients, forming a dreamy shade of violet.",
      4: "wolfhook juice",
      0: "Wolfhook Juice",
    },
  };

  const dishItem = {
    item1: {
      1: "assets/item_Mondstadt_Hash_Brown.webp",
      2: "1200",
      3: "A fried cake of mashed potatoes. A little bit of pinecone helps give it a nice crunch, and great with a bit of jam. Loved by people of all ages.",
      4: "hash brown",
      0: "Monstadt Hash Brown",
    },
    item2: {
      1: "assets/item_Barbatos_Ratatouille.webp",
      2: "2500",
      3: "A simple chowder with a long history. The ingredients are similarly traditional and simple. No matter where you are, a piping-hot chowder of this sort can always give you a sense of real and unsurpassed satisfaction.",
      4: "barbatos rataouille",
      0: "Barbatos Ratatouille",
    },
    item3: {
      1: "assets/item_Super_Magnificent_Pizza.webp",
      2: "2200",
      3: "An exceedingly sumptuous pizza. First lay out a base of ham, then add in meat that has been chopped up into little bits for a dish that packs an unrivaled sense of satisfaction. Once roasted, the char of meat and the creamy flavor of the cheese are truly a tantalizing combination.",
      4: "super pizza",
      0: "Super Magnificent Pizza",
    },
    item4: {
      1: "assets/item_pile_up.webp",
      2: "1900",
      3: "A rich, meaty dish. Originally a Mondstadt dish made of steaks, potatoes, and cheese, it has since become synonymous with Ludi Harpastum.",
      4: "pile em up",
      0: "Pile' Em Up",
    },
  };

  const displayItem = (obj) => {
    Object.values(obj).forEach((item) => {
      container.append(makeItem(item[1], item[2], item[3], item[4], item[0]));
    });
  };

  container.append(makeHeader("Drinks", "drinks"));

  displayItem(drinkItems);

  container.append(makeHeader("Dishes", "dishes"));

  displayItem(dishItem);

  content.append(container);
};

export function tabMenu() {
  const d = document.querySelector(".menu");
  const content = document.querySelector("#content");
  d.addEventListener("click", () => {
    content.innerHTML = "";
    makeMenu();
  });
}

export default makeMenu;
