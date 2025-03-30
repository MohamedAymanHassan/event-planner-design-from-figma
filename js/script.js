let menuBtn = document.querySelector(".menu-btn");
let sidebar = document.querySelector(".sidebar");
let closeSidebar = document.querySelector(".close-sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = `block`;
});

closeSidebar.addEventListener("click", () => {
  sidebar.style.display = `none`;
});
