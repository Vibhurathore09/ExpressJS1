import express from "express";
const router = express.Router();
const port = process.env.PORT || 3000;

// All  Routes  // Messy Code

router.get("/all", (req, res) => {
  res.send("All ");
});
router.post("/create", (req, res) => {
  res.send("New Studernt Created");
});
router.put("/update", (req, res) => {
  res.send(" Updated");
});
router.delete("/delete", (req, res) => {
  res.send(" Deleted");
});

export default router;
