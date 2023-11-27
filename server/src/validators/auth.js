const { check } = require("express-validator");
const db = require("../db");
const { compare } = require("bcryptjs");

// Password
const password = check("password")
	.isLength({ min: 6, max: 12 })
	.withMessage("Password must be at least 6 characters");

// Email
const email = check("email").isEmail().withMessage("Invalid email format.");

// Check if email is exist
const isEmailExist = check("email").custom(async (value) => {
	const { rows } = await db.query("select * from users where email = $1", [
		value,
	]);

	if (rows.length) {
		throw new Error("Email already exists.");
	}
});

// Login validator
const loginFieldsCheck = check("email").custom(async (value, { req }) => {
	const user = await db.query("SELECT * from users WHERE email = $1", [value]);

	if (!user.rows.length) {
		throw new Error("Email does not exists.");
	}

	const validPassword = await compare(req.body.password, user.rows[0].password);

	if (!validPassword) {
		throw new Error("Wrong password");
	}

	req.user = user.rows[0];
});

module.exports = {
	registerValidation: [email, password, isEmailExist],
	loginValidation: [loginFieldsCheck],
};
