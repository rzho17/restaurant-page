export const createP = (text) => {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
};

export const homeContent = () => {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.className = "container";

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to the Angel's Share Tavern";
  h1.className = "title";
  container.appendChild(h1);

  const img = document.createElement("img");
  img.src = "../src/assets/angels-share-exterior.png";
  container.appendChild(img);

  container.appendChild(
    createP(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quasi harum numquam, eius odio, recusandae mollitia eaque et accusantium iure provident. Ab excepturi rerum fuga inventore itaque dolores modi dicta."
    )
  );
  container.appendChild(
    createP(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quasi harum numquam, eius odio, recusandae mollitia eaque et accusantium iure provident. Ab excepturi rerum fuga inventore itaque dolores modi dicta."
    )
  );
  container.appendChild(
    createP(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quasi harum numquam, eius odio, recusandae mollitia eaque et accusantium iure provident. Ab excepturi rerum fuga inventore itaque dolores modi dicta."
    )
  );

  content.append(container);
};

export function tabHome() {
  const d = document.querySelector(".home");
  const content = document.querySelector("#content");
  d.addEventListener("click", () => {
    content.innerHTML = "";
    homeContent();
  });
}

//reference to change the tabs

// export function test2() {
//   const d = document.querySelector(".menu");
//   const content = document.querySelector("#content");
//   d.addEventListener("click", () => {
//     console.log("bye");
//     homeContent();
//   });
// }

export default homeContent;
