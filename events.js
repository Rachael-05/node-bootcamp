const EvetEmitter = require("events");

const myEmitter = new EvetEmitter();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Jonas");
});

myEmitter.emit("newSale");
