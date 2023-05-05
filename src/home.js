export const createP = (text) => {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
};

export const homeContent = () => {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.className = "container";

  const h2 = document.createElement("h2");
  h2.textContent = "Welcome to the Angel's Share Tavern";
  h2.className = "title";
  container.appendChild(h2);

  const img = document.createElement("img");
  img.className = "showRoom";
  img.src = "assets/angels-share-exterior.png";
  container.appendChild(img);

  container.appendChild(
    createP(
      "Angel's Share was opened by the Dawn Winery and once held a monopoly over Mondstadt's wine industry. However, since Diona was hired as bartender for Cat's Tail, the rival tavern has become a challenger overnight — but still sees less sales than Angel's Share."
    )
  );
  container.appendChild(
    createP(
      "The tavern occasionally hosts an academy to teach interested prospects about the art of bartending. Initially it was meant to serve all types of drinks, but after an incident in which one of the attendees mixed a drink with three hard liquors, the session is now restricted to non-alcoholic drinks only."
    )
  );

  content.append(container);
};

export function tabHome() {
  const d = document.querySelector(".home");
  const h1 = document.querySelector("h1");
  const content = document.querySelector("#content");
  d.addEventListener("click", () => {
    content.innerHTML = "";
    homeContent();
  });

  h1.addEventListener("click", () => {
    content.innerHTML = "";
    homeContent();
  });
}

export default homeContent;
