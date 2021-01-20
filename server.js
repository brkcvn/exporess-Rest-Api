let express = require('express');

//converts data to json format.
let bodyParser = require('body-parser');

const userRouter = require('./route');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Added port name
app.listen(3500, function () {
});

app.use('/api', userRouter);

