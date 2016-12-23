let Router = require("./router");


document.addEventListener("DOMContentLoaded", () => {

  let navEls = Array.from(document.querySelectorAll(".sidebar-nav li"));

  navEls.forEach(navEl => {
    navEl.addEventListener("click", () => {
      let name = navEl.innerText.toLowerCase();
      window.location.hash = name;
    });
  });


  let content = document.querySelector(".content");
  const newRouter = new Router(content);
  newRouter.start();


});
