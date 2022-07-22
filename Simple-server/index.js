import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
mongoose.set("strictQuery", false);
const DB_URL = `mongodb+srv://user:user@cluster0.phluquy.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("Server started on port " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();

/* This code is setting up an Express server. 
It imports the Express and Mongoose libraries, as well as a router file and the express-fileupload library. 
The server is configured to run on port 5000, and it connects to a MongoDB database with the given URL. 
The app uses express.json(), express.static('static'), fileUpload({}), and the router for its middleware. 
Finally, it starts the app with an asynchronous function that connects to the MongoDB database and listens on port 5000. */
