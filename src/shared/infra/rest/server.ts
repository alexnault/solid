import express from "express";
// import session from "express-session";
import bodyParser from "body-parser";
// import jwt from "jsonwebtoken";

import UserController from "../../../controllers/UserController";
import InMemoryUserRepo from "../../../repos/InMemoryUserRepo";

// if (!process.env.SESSION_SECRET) {
//   console.log("No client secret. Set SESSION_SECRET environment variable.");
//   process.exit(1);
// }

const app = express();

app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const corsOptions = {
//   origin: '<insert uri of front-end domain>',
//   credentials: true // <-- REQUIRED backend setting
// };
// app.use(cors(corsOptions));
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: SESSION_SECRET,
//     store: new MongoStore({
//         url: mongoUrl,
//         autoReconnect: true
//     })
// }));

// TODO move
const userController = new UserController(new InMemoryUserRepo());
app.get("/users", userController.handleRequest);
app.post("/users/signup", userController.handleRequestCreate);
// app.delete("/:userId", (req, res) => deleteUserController.execute(req, res));

// app.use(errorHandler());

const server = app.listen(app.get("port"), () => {
  console.log(
    "🚀 App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
});

export default server;
