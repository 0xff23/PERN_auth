const db = require("../db");

exports.getUsers = async (req, res) => {
	try {
		const { rows } = await db.query("select * from users");
		console.log(rows);
	} catch (err) {
		console.log(err.message);
	}
};
