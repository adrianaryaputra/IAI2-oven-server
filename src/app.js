const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Config = require('./config');
const app = express();
const expressRouter = express.Router();


const expressCallback = require('./callback.express');
const measurementRouter = require('./measurement/measurement.router');
const deviceRouter = require('./device/device.router');
const documentRouter = require('./document/document.router');


const measurementRoutes = measurementRouter({
  httpRouter: expressRouter,
  httpCallback: expressCallback,
  httpAddress: '/API' + Config.VERSION + '/measurement', 
});

const deviceRoutes = deviceRouter({
  httpRouter: expressRouter,
  httpCallback: expressCallback,
  httpAddress: '/API' + Config.VERSION + '/device', 
});

const documentRoutes = documentRouter({
  httpRouter: expressRouter,
  httpCallback: expressCallback,
  httpAddress: '/API' + Config.VERSION + '/document', 
});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(measurementRoutes);
app.use(deviceRoutes);
app.use(documentRoutes);


server = app.listen(Config.HTTP_PORT);
console.log(Config.HTTP_PORT);


module.exports = {
  app,
  server,
};