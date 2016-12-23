class Router {
  constructor(node) {
    this.node = node;
  }

  start () {
    this.render();

    window.addEventListener("hashchange", () => {
      this.render();
    });

  }

  activeRoute() {
    let route = window.location.hash;
    route.shift();
    return route;
  }

  render() {
    this.node.innerHTML = "";
    let currentRoute = this.activeRoute();

    let newP = document.createElement("P");
    newP.innerHTML = currentRoute;
    this.node.appendChild(newP.render());
  }
}

module.exports = Router;
