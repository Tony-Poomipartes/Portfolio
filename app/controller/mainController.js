async function renderHomePage (req,res) {
  try {
    const context = { currentPage: "home" };
    res.render("home", context);
  } catch (error) {
    res.status(404).render("404");
  }
}

async function renderProjectPage (req,res) {
  try {
    const context = { currentPage: "project" };
    res.render("project", context);
  } catch (error) {
    res.status(404).render("404");
  }
}

module.exports = {
  renderHomePage,
  renderProjectPage
};
