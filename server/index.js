const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./data.db");


db.run(`
CREATE TABLE IF NOT EXISTS saved_req (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  url TEXT,
  method TEXT,
  headers TEXT,
  body TEXT
)
`);


app.post("/save", (req, res) => {
  const { name, url, method, headers, body } = req.body;

  db.run(
    `INSERT INTO saved_req (name,url,method,headers,body) VALUES (?,?,?,?,?)`,
    [name, url, method, JSON.stringify(headers), body],
    function (err) {
      if (err) return res.send(err);
      res.send({ id: this.lastID });
    }
  );
});


app.get("/all", (req, res) => {
  db.all("SELECT * FROM saved_req", [], (err, rows) => {
    if (err) return res.send(err);
    res.send(rows);
  });
});


app.delete("/del/:id", (req, res) => {
  db.run("DELETE FROM saved_req WHERE id=?", [req.params.id]);
  res.send({ msg: "deleted" });
});

app.listen(5000, () => console.log("running on 5000"));