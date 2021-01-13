var express = require('express');
var bodyParser = require('body-parser');

var cities = [{ name: 'Istanbul', country: 'Turkey' }, { name: 'Berlin', country: 'Germany' }];

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3500, function () {
});

app.get('/api/cities', function (request, response) {
  response.send(cities);
});

app.post('/api/cities', function (request, response) {
  var city = request.body;
  for (var index = 0; index < cities.length; index++) {
    if (cities[index].name === city.name) {
      response.status(500).send({ error: "Bu şehir zaten kayıtlı" });
      return;
    }
  }

  cities.push(city);
  response.send(cities);
});