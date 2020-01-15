'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SpotSchema = new Schema({
  city: {
    type: String,
    required: 'Kindly enter the city name'
  },
  country: {
    type: String,
    required: 'Kindly enter the country name'
  },
  image: {
    type: String,
    required: 'Kindly enter the image path'
  },
  latitude: {
    type: Number,
    required: 'Kindly enter the latitude'
  },
  longitude: {
    type: Number,
    required: 'Kindly enter the longitude'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['visited', 'lived', 'expected']
    }],
    default: ['visited']
  }
});

module.exports = mongoose.model('Spots', SpotSchema);