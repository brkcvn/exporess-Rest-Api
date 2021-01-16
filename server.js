let express = require('express');

//converts data to json format.
let bodyParser = require('body-parser');

//sample datas
let cities = [{ id: '0', name: 'Istanbul', country: 'Turkey', isDeleted: true }, { id: '1', name: 'Berlin', country: 'Germany', isDeleted: true }, { id: '2', name: 'Londra', country: 'England', isDeleted: true }];

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Added port name
app.listen(3500, function () {
});

//use get method
app.get('/api/cities', function (request, response) {
  response.send(cities);
});

//use post method
app.post('/api/cities', function (request, response) {
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
app.put('/api/cities/:id', function (request, response) {
  const updateId = request.params.id;
  const updateCustomer = request.body;
 
  cities[updateId] = updateCustomer;
  response.send(cities);
});


// //use delete method
app.delete('/api/cities/:id', function (request, response) {
  const deleteId = request.params.id;
  delete cities[deleteId];
  
  response.send(cities)
});

