import { join } from "path";

const homeController = (req, res) => {
//   res.sendFile(join(process.cwd()), "Views", "index.html");
res.redirect("../Views/index.html");
};

export {homeController};
