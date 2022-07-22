const fs = require("fs");
const express = require("express");
const superagent = require("superagent");

const app = express();
let imageUrl;

app.get("/", (req, res) => {
  fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
    superagent
      .get(`https://dog.ceo/api/breed/${data}/images/random`)
      .end((err, response) => {
        if (err) return console.log(err.message);
console.log(response.body.message);
        imageUrl = response.body.message;

        fs.writeFile("dog-img.txt", imageUrl, (err) => {
          if (err) return console.log(err.message);
        });

        res.send(
          `<html>
            <body>
              <form action="/" method="post">
                <input type="submit" value="Change Image">
              </form>
              <br>
              <img src="${imageUrl}" alt="A random dog image">
            </body>
          </html>`
        );
      });
  });
});

app.post("/", (req, res) => {
  fs.writeFile("dog-img.txt", imageUrl, (err) => {
    if (err) return console.log(err.message);
  });

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

/* The original version, without seeing pictures in the browser
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Bread: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      if (err) return console.log(err.message);
      console.log(res.body.message);

      fs.writeFile("dog-img.txt", res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log("Random Image of Dog saved to file");
      });
    });
}); */
