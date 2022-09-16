"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_data_source_1 = require("./app-data-source");
app_data_source_1.myDataSource.initialize().then(function () {
    console.log('connected');
}).catch(function (err) { return console.error('Error in connection \n', err); });
