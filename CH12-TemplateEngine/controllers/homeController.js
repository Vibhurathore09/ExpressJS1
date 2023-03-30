const homeController = (req, res) => {
  res.render("index", { name: "Parth The Kabadi" });
};

export { homeController };
