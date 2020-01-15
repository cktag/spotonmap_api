'use strict';


var mongoose = require('mongoose'),
    Spot = mongoose.model('Spots');

exports.list_all_spots = function(req, res) {
  Spot.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_a_spot = function(req, res) {
  var new_spot = new Spot(req.body);
  new_spot.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_spot = function(req, res) {
  Spot.findById(req.params.spotId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_spot = function(req, res) {
  Spot.findOneAndUpdate({_id: req.params.spotId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_spot = function(req, res) {

  Spot.remove({
    _id: req.params.spotId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Spot successfully deleted' });
  });
};
