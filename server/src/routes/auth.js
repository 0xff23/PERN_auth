const { Router } = require("express");
const {
	getUsers,
	register,
	login,
	secured,
	logout,
} = require("../controllers/auth");
const { registerValidation, loginValidation } = require("../validators/auth");
const {
	validationMiddleware,
} = require("../middleware/validations-middleware");
const { userAuth } = require("../middleware/auth-middleware");
const router = Router();

router.get("/get-users", getUsers);
router.post("/register", registerValidation, validationMiddleware, register);
router.get("/secured", userAuth, secured);
router.post("/login", loginValidation, validationMiddleware, login);
router.get("/logout", logout);

module.exports = router;
