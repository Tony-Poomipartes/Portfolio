const middleware404 = (req, res) => {
  const context = { currentPage: "home" };
  res.status(404).render("404", context);
};

module.exports = middleware404;
