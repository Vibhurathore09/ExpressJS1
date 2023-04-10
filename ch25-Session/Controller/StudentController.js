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
}
export default StudentController;
