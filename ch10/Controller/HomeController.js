import { join } from "path";

const HomeController = (req, res) => {
  // res.send('Home Page');
  //   res.sendFile(
  //     "c:\\Users\\Acer\\OneDrive\\Desktop\\ExpressJS\\ch10\\views\\index.html"
  //   );
  console.log(join(process.cwd(), "views", "index.html"));
  res.sendFile(join(process.cwd(), "views", "index.html"));
};

export { HomeController };
