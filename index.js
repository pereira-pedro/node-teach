const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/math_service", (req, res) => {
    var result;

    eval(`result = ${req.query.ope1}${req.query.operator}${req.query.ope2}`);

    res.json({
      result: result
    });
    res.end();
  })
  .get("/math", (req, res) => {
    var result;

    eval(`result = ${req.query.ope1}${req.query.operator}${req.query.ope2}`);

    res.render("math", {
      operand1: req.query.ope1,
      operator: req.query.operator,
      operand2: req.query.ope2,
      result: result
    });
    res.end();
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
