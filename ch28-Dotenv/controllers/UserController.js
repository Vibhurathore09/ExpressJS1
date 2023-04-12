import UserModel from "../models/user.js";
import bcyrpt from "bcrypt";
class UserController {
  static home = (req, res) => {
    res.render("index");
  };
  static registration = (req, res) => {
    res.render("registration");
  };
  //   Registrating User for Submitting Form without Hash
  //   static createUserDoc = async (req, res) => {
  //     try {
  //       // Creating New Document Using Model
  //       const doc = new UserModel({
  //         name: req.body.name,
  //         email: req.body.email,
  //         password: req.body.password,
  //       });
  //       // Saving Document
  //       await doc.save();
  //       res.redirect("/login");
  //       console.log(doc);
  //     } catch (error) {}
  //   };

  //   Registrating User for Submitting Form with Hash
  static createUserDoc = async (req, res) => {
    const hashPassword = await bcyrpt.hash(req.body.password, 10);
    try {
      // Creating New Document Using Model
      const doc = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
      });
      // Saving Document
      await doc.save();
      res.redirect("/login");
      //   console.log(doc);
    } catch (error) {}
  };

  static login = (req, res) => {
    res.render("login");
  };
  //   Verifying Login without Hash
  static verifyLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await UserModel.findOne({ email: email });
      if (result != null) {
        if (result.email == email && result.password == password) {
          res.send("<h1>Logged In</h1>");
        } else {
          res.send("<h1> Email or Password is Incorrect</h1>");
        }
      } else {
        res.send("<h1> You are not a Registered User </h1>");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   Verifying Login with Hash
  static verifyLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await UserModel.findOne({ email: email });
      if (result != null) {
        const isMatch = await bcyrpt.compare(password, result.password);
        if (result.email == email && isMatch) {
          res.send("<h1>Logged In</h1>");
        } else {
          res.send("<h1> Email or Password is Incorrect</h1>");
        }
      } else {
        res.send("<h1> You are not a Registered User </h1>");
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default UserController;
