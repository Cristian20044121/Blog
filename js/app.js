const menuHamburguer = document.querySelector(".menu-hamburguer");
const navMobile = document.querySelector(".nav-mobile");
const modDark = document.querySelector(".mod-dark");

let darkIconContent; // Variable para guardar el contenido original del modDark

menuHamburguer.addEventListener("click", () => {
  navMobile.classList.toggle("hidden");
});

modDark.addEventListener("click", () => {
  const html = document.querySelector("html");
  const darkModeEnabled = html.classList.toggle("dark");

  // Guardar el estado del modo oscuro en el localStorage
  localStorage.setItem("darkModeEnabled", darkModeEnabled);

  // Modificar el contenido del elemento modDark con el nuevo SVG según el estado actual
  modDark.innerHTML = darkModeEnabled
    ? darkIconContent
    : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-6 h-6"> <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z"/></svg>';
});

// Al cargar la página, verificar si el modo oscuro está habilitado en localStorage
window.addEventListener("DOMContentLoaded", () => {
  const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
  if (darkModeEnabled) {
    // Si está habilitado, aplicar la clase dark al elemento html
    const html = document.querySelector("html");
    html.classList.add("dark");
  }

  // Guardar el contenido original del modDark
  darkIconContent = modDark.innerHTML;
});