import express from "express";
import bodyParser from "body-parser";

// MySQL config
import db from "./connection.js";
import PeopleRoutes from "./routes/peopleRoute.js";

// App config
const app = express();
const port = process.env.PORT || 8080;
app.use("/students", PeopleRoutes);

// middleware
app.use(bodyParser.json());

// Api routes
app.get("/", (req, res) => res.status(200).send("Hello from the other world"));

// Listen to the server
app.listen(port, () => console.log(`Listening on the port : ${port}`));
