import session from "express-session";
class StudentController {
  // get session information
  static get_session_info = (req, res) => {
    res.send("Session Info...");
    console.log(req.session);
    console.log(req.session.id);
    console.log(req.session.cookie);
    console.log(req.session.originalMaxAge);
  };

  static regn_session = (req, res) => {
    req.session.regenerate(() => {
      console.log(`Session Regenerated... New Session ID${req.session.id}`);
    });
  };
  static delete_session = (req, res) => {
    req.session.destroy(() => {
      console.log("Session Destroyed");
    });
    res.send("Session Deleted");
  };
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
