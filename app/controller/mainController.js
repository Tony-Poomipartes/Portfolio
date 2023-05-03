async function renderHomePage (req,res) {
  try {
    res.render("home");
    console.log("test home");
  } catch (error) {
    res.status(404).render("404");
  }
}

async function renderProjectPage (req,res) {
  try {
    console.log("test");
    res.render("project");
    console.log("test");
  } catch (error) {
    res.status(404).render("404");
  }
}

module.exports = {
  renderHomePage,
  renderProjectPage
};
