import "./styles.css";

function pageLoad() {

    const home = document.querySelector(".home");
    const menu = document.querySelector(".menu");
    const contact = document.querySelector(".contact");

    home.style.color = "rgb(237,18,80)";
    menu.style.color = "rgb(255,246,218)";
    contact.style.color = "rgb(255,246,218)";

  const content = document.getElementById("content");
  content.innerHTML = "";
  content.classList.add("cover");

  const opacity = document.createElement("div");
  opacity.classList.add("opacity");

  const hero = document.createElement("div");
  hero.classList.add("hero-text");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Quality Ingredients. <br> Quality Burgers.";
  const p = document.createElement("p");
  p.textContent = "100% Pure Beef.";
  const button = document.createElement("button");
  button.textContent = "Order Now";

  hero.appendChild(h1);
  hero.appendChild(p);
  hero.appendChild(button);

  content.append(hero);
  content.append(opacity);
}


export {pageLoad};

