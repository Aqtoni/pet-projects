import express from "express";
import session from "express-session";
import passport from "passport";
import authRoutes from "./routes/auth";

require("dotenv").config();
require("./strategies/google"); 

async function bootstrap() {
  const app = express();
  const PORT = process.env.PORT;

  app.use(
    session({
      secret: "my-secret-key",
      resave: false,
      saveUninitialized: false,
      store: new session.MemoryStore(),
    })
  );
  app.use(passport.initialize());
  app.use("/api/auth", authRoutes);
  app.get("/", (req, res) => {
    res.send("Welcome to the Google Auth Example!");
  });
  try {
    app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

bootstrap();
