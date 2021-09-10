function main() {
  fetch("/env")
    .then((res) => res.json())
    .then((data) => (document.querySelector(".root").textContent = JSON.stringify(data)));

  const botonEl = document.querySelector(".boton");
  botonEl.addEventListener("click", () => {
    history.pushState({}, "", "/una-ruta-especial");
  });
}
main();
