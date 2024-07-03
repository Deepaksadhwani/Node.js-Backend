const fs = require("fs");
const path = require("path");

const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
  );

const getProductsFromFiles = (cb) => {
  fs.readFile(p, (err, data) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    
    getProductsFromFiles((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    fs.readFile(p, (err, data) => {});
  }
  static fetchAll(cb) {
    getProductsFromFiles(cb);
  }
};
