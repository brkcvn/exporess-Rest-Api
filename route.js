
const express = require('express');
router = express.Router();

let cities = [{ id: '0', name: 'Istanbul', country: 'Turkey', isDeleted: true }, { id: '1', name: 'Berlin', country: 'Germany', isDeleted: true }, { id: '2', name: 'Londra', country: 'England', isDeleted: true }];


//use get method
router.get('/list', function (request, response) {
  response.send(cities);
});

//use post method
router.post('/new', function (request, response) {
  let city = request.body;
  for (let item of cities) {
    if (item.id == city.id) {
      response.status(500).send({ error: 'This city is already registered' });
      return;
    }
  }
  cities.push(city);
  response.send(cities);
});

// use put method
router.put('/edit/:id', function (request, response) {
  const updateId = request.params.id;
  const updateCustomer = request.body;
 
  // objIndex = cities.findIndex(function(element) {
  //   return element.id == updateId;
  // });

  cities[updateId] = updateCustomer;
  response.send(cities);
});


// //use delete method
router.delete('/delete/:id', function (request, response) {
  const deleteId = request.params.id;
  delete cities[deleteId];
  
  response.send(cities)
});

module.exports = router;