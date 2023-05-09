const app = {
  //?================================================
  //?------------ Color theme selection--------------
  //?================================================
  themeSwitch: function () {
    // select the element that triggers the theme switch.
    const switchTheme = document.getElementById("theme-switch");
    const body = document.body;
    // get the theme in the local storage
    let theme = localStorage.getItem("theme");
  // if the theme is set to "white theme"then we add a class "white theme" on the body
    if (theme === "white-theme") {
      body.classList.add("white-theme");
    }
  //we put an event listener on the "switchTheme"
    switchTheme.addEventListener("click", () => {
      //when we clic, it add or remove the class
      body.classList.toggle("white-theme");
  //if the body as the "white-theme" class , then we store it in the local storage
      if (body.classList.contains("white-theme")) {
        localStorage.setItem("theme", "white-theme");
      } else {
        //else we delete it with an empty string
        localStorage.setItem("theme", "");
      }
    });
  },
  //?================================================
  //?----------- Scroll event on the nav bar---------
  //?================================================
  navScrollEvent: function () {
    //Variable to store the position of the last scroll. 
    let lastScroll = 0;
    const body = document.body;
    const currentPage = document.querySelector(".container").dataset.currentPage;
    //if the current page is not "home"
    //Add a "scroll" event to the window. 
  if (currentPage !== "home") {
      window.addEventListener("scroll", () => {
        //get the current position of the scroll. 
        const currentScroll = window.pageYOffset;
  //If the current position of the scroll is at the top of the page, the scroll-up class is removed from the body. We reinitializ the position of the navigation menu . 
        if (currentScroll <= 0) {
          body.classList.remove("scroll-up");
          nav.style.transform = "translateY(0%)";
        }
  //If the current position of the scroll is at the bottom of the page and the class "scroll-down" is not present on the body.
  //The "scroll-up" class is removed from the body, we add the "scroll-down" class to it and the navigation menu is moved outside the window. 
        if (
          currentScroll > lastScroll &&
          !body.classList.contains("scroll-down")
        ) {
          body.classList.remove("scroll-up");
          body.classList.add("scroll-down");
          nav.style.transform = "translateY(-130%)";
        }
  //If the current position of the scroll is at the top of the page and the scroll-down class is present on the body.
  //The "scroll-down" class is removed from the body, the "scroll-up" class is added to the body and the navigation menu is replaced at its initial position. 
        if (
          currentScroll < lastScroll &&
          body.classList.contains("scroll-down")
        ) {
          body.classList.remove("scroll-down");
          body.classList.add("scroll-up");
          nav.style.transform = "translateY(0%)";
        }
        //The value of the position of the last scroll is updated.
        lastScroll = currentScroll;
      });
    }
  },
  //?================================================
  //?---------------- drop-down menu ----------------
  //?================================================
  menuBurger: function () {
    // Get the elements of the DOM 
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const main = document.querySelector('main');
    // Add an event listener 'click' on the burger 
    burger.addEventListener('click', () => {
      //Toggle the 'active' class on the menu item to display/hide the menu 
      menu.classList.toggle('active');
    });
//Addition of an event listener 'click' on the main content.
    main.addEventListener('click', (event) => {
      //If the menu item contains the 'active' class, we delet it to hide the menu 
        menu.classList.remove('active');
    });
  },
};

function init() {
  app.menuBurger();
  app.themeSwitch();
  app.navScrollEvent();
}
init();
