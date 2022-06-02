// require("dotenv").config();
process.env.KEY="xEC0JxJ21%bxNkFOccMK5gfH06zcS0aG90Y%"
process.env.PG_URL="postgres://wfpvdiop:YepfxT32SdMBucYKStnZ_WvTz3Lg1S5N@arjuna.db.elephantsql.com/wfpvdiop"

const express = require("express");
const AuthMiddleware = require("./middlewares/AuthMiddleware");
const ErrorModifierMiddleware = require("./middlewares/ErrorModifierMiddleware");
const db = require("./modules/pg");
const Router = require("./routes");
const app = express();

app.listen(process.env.PORT || 80);

app.get('/test', (req,res) => {
	res.send({ Update: 1})
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AuthMiddleware);
app.use(ErrorModifierMiddleware);

async function server() {
	const database = await db();

	app.use((req, res, next) => {
		req.db = database;
		next();
	});

	app.use("/paycom", Router);
	
}

server();
