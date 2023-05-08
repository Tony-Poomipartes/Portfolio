const app = {

  //?------------ Color theme selection-----------------------
  themeSwitch: function () {
    const switchTheme = document.getElementById("theme-switch");
    switchTheme.addEventListener("click", () => {
      document.body.classList.toggle("white-theme");
    });
  },

  //?----------- Scroll event on the nav bar---------
  navScrollEvent: function () {
    let lastScroll = 0;
    const body = document.body;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        nav.style.transform = "translateY(0%)";
      }

      if (
        currentScroll > lastScroll &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
        nav.style.transform = "translateY(-100%)";
      }


      if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
        nav.style.transform = "translateY(0%)";
      }
      lastScroll = currentScroll;
    });
  },

  //?---------------- drop-down menu ---------------------
  menuBurger: function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    
    burger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  },
};

function init() {
  app.menuBurger();
  app.themeSwitch();
  app.navScrollEvent();
}
init();
