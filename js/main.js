let btn = document.querySelector("#icon-logo");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function () {
  sidebar.classList.toggle("active");
}

searchBtn.onclick = function () {
  sidebar.classList.toggle("active");
}