const tecnicas = ["gouache", "acrílico", "oleo", "acuarela", "oil pastels", "lapices de colores", "grafito", "pastel seco", "lapices acuareleables", "plumon de alcohol", "tinta"];
const personaje = ["aves", "mamiferos", "marinos", "insectos", "reptiles", "comida", "paisajes", "flores", "frutas", "manga", "caricatura"];
const croma = ["monocromatico", "analogo", "complementarios", "analogo con acento", "split-complementario", "triadico", "doble complementario (tetradico)", "esquema a medida (5 colores)"];

function random_selection(arr) {
  arr_length = arr.length
  return Math.floor(Math.random() * arr_length);
}

function random_rgb() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`
}

const btn = document.querySelector(".button");
btn.addEventListener("click", async function () {

  //Box 1
  const tecnica1_text = document.querySelector(".tbox1");
  random_value = random_selection(tecnicas)
  tecnica1_text.innerHTML = tecnicas[random_value]

  //Box 2
  const tecnica2_text = document.querySelector(".tbox2");
  random_value = random_selection(tecnicas)
  tecnica2_text.innerHTML = tecnicas[random_value]

  //Box 3
  const tecnica3_text = document.querySelector(".tbox3");
  random_value = random_selection(personaje)
  tecnica3_text.innerHTML = personaje[random_value]

  //Box 2
  const tecnica4_text = document.querySelector(".tbox4");
  random_value = random_selection(croma)
  tecnica4_text.innerHTML = croma[random_value]

  //Box 5
  const croma_text = document.querySelector(".tbox5");
  const box5_color = document.querySelector(".box5");
  new_color = random_rgb()
  croma_text.innerText = new_color;
  box5_color.style.backgroundColor = new_color

})