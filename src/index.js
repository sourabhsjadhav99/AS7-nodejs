const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
app.use(express.urlencoded());
let studentArray = require("./InitialData");
require("./mongoose/config");
const Product = require("./mongoose/product");



// let insertArray = async () => {
//   let data = await Product.insertMany(studentArray);
//   console.log(data);
// };
// insertArray();


//get
app.get("/api/student", async (req, res) => {
  try {
    let data = await Product.find();
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});

//get by id
app.get("/api/student/:id", async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/x-www-form-urlencoded')
    let data = await Product.find({id:req.params.id})
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});

//post
app.use(express.json());
app.post("/api/student", async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/x-www-form-urlencoded')
    let data = new Product(req.body);
    const result = await data.save();
    res.send(result);
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});

//put
app.put("/api/student/:id", async (req, res) => {
  try {
    let data = await Product.findOneAndUpdate(
      { id: req.params.id },
      { $set: req.body }
    );
    res.send(data);
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});

//delete
app.delete("/api/student/:id", async (req, res) => {
  try {
    let data = await Product.findOneAndDelete(req.params);
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
