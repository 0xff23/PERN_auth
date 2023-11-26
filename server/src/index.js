const express = require("express");
const app = express();
const { PORT } = require("./constants");

// Routes
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

const appStart = () => {
	try {
		app.listen(PORT, () => {
			console.log(`The app is listening on port: ${PORT}`);
		});
	} catch (err) {
		console.log(`Error ${err.message}`);
	}
};

appStart();
