import session from "express-session";
class StudentController {
  // get session information

  static session_Example = (req, res) => {
    if (req.session.count) {
      req.session.count++;
    } else {
      req.session.count = 1;
    }
    res.send(`You have visited this page ${req.session.count} times`);
  };

  static get_Session_Data = (req, res) => {
    if (req.session.device) {
      res.send(
        `You are using ${req.session.device} Count : ${req.session.count}`
      );
    } else {
      res.send("Sesssion Data Device Not Found");
    }
  };
}
export default StudentController;
