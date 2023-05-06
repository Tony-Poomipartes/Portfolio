async function renderHomePage (req,res) {
  try {
    res.render("home");
  } catch (error) {
    res.status(404).render("404");
  }
}

async function renderProjectPage (req,res) {
  try {
    res.render("project");
  } catch (error) {
    res.status(404).render("404");
  }
}

module.exports = {
  renderHomePage,
  renderProjectPage
};
