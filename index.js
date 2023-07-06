const express = require("express");
const port =  5000;
const app = express();

// Define the Fruit class
class Fruit {
    constructor(id, name, color) {
      this.id = id;
      this.name = name;
      this.color = color;
    }
  }
  
  // Define some example fruits
  const fruits = [
    new Fruit(1, 'Apple', 'Red'),
    new Fruit(2, 'Banana', 'Yellow'),
    new Fruit(3, 'Grape', 'Purple'),
    new Fruit(4, 'Orange', 'Orange'),
    new Fruit(5, 'Kiwi', 'Green')
  ];
  
  // Define the API route that returns a sorted list of fruits based on color
  app.get('/fruits', (req, res) => {
    const sortedFruits = fruits.slice().sort((a, b) => a.color.localeCompare(b.color));
    res.json({
        message:"List of sorted fruits",
        sortedFruits:sortedFruits});
  });
  app.get('/', (req, res) => {
    res.json({
        message:"List of All Fruits",
        Fruits:fruits
    })
  });
  app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
  });
