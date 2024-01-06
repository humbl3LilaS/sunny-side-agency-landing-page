const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("nav");

navBtn.addEventListener("click", () => {
  const isVisible = navBar.getAttribute("data-visible");
  if (isVisible === 'false') {
	navBar.setAttribute("data-visible", "true")
	navBtn.setAttribute("aria-expanded", "true")
  } else {
	navBar.setAttribute("data-visible", "false")
	navBtn.setAttribute("aria-expanded", "false")
  }
})