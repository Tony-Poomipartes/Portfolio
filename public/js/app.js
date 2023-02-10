const app = {
  themeSwitch: function () {
    const switchTheme = document.getElementById("theme-switch");
    switchTheme.addEventListener("click", () => {
      document.body.classList.toggle("white-theme");
    });
  },

  navScrollEvent: function () {
    let lastScroll = 0;
    const body = document.body;
    // navBar Scroll display

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
      }
      // If currentScroll for example = 0 and so is superior to the lastScroll et que le body ne contient pas le scroll-down
      if (
        currentScroll > lastScroll &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
        //  If it's true, we remove the scroll up to add this scroll down
      }

      // We now want to add the reverse effect, (mean to see the navBar again by scrolling up)
      if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    });
  },
};

function init() {
  app.themeSwitch();
  app.navScrollEvent();
}
init();
