const createP = (text) => {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
};

const homeContent = (() => {
  const content = document.querySelector("#content");

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to the Angel's Share Tavern";
  h1.className = "title";
  content.appendChild(h1);

  const img = document.createElement("img");
  img.src = "../src/assets/angels-share-exterior.png";
  content.appendChild(img);

  content.appendChild(
    createP(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quasi harum numquam, eius odio, recusandae mollitia eaque et accusantium iure provident. Ab excepturi rerum fuga inventore itaque dolores modi dicta."
    )
  );
  content.appendChild(
    createP(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quasi harum numquam, eius odio, recusandae mollitia eaque et accusantium iure provident. Ab excepturi rerum fuga inventore itaque dolores modi dicta."
    )
  );
  content.appendChild(
    createP(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quasi harum numquam, eius odio, recusandae mollitia eaque et accusantium iure provident. Ab excepturi rerum fuga inventore itaque dolores modi dicta."
    )
  );
})();

export default homeContent;
