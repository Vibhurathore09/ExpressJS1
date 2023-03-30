import { join } from "path";

const aboutController = (req, res) => {
  //   res.send("About Page");
  //   res.sendFile(
  //     "c:\\Users\\Acer\\OneDrive\\Desktop\\ExpressJS\\ch10\\views\\about.html"
  //   );
  console.log(join(process.cwd(), "views", "about.html"));
  res.sendFile(join(process.cwd(), "views", "about.html"));
};
export { aboutController };
