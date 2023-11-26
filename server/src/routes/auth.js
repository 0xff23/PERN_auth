const { Router } = require("express");
const router = Router();

router.get("/auth", (req, res) => {
	return res.send("Hello from auth");
});

module.exports = router;
