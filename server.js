var express = require('express');

//converts data to json format.
var bodyParser = require('body-parser');

//sample datas
var cities = [{ name: 'Istanbul', country: 'Turkey' }, { name: 'Berlin', country: 'Germany' }];

var app = express();

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
  var city = request.body;
  for (var index = 0; index < cities.length; index++) {
    if (cities[index].name === city.name) {
      response.status(500).send({ error: 'This city is already registered' });
      return;
    }
  }
  cities.push(city);
  response.send(cities);
});
