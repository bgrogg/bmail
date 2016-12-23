/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	let Router = __webpack_require__(1);


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


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);