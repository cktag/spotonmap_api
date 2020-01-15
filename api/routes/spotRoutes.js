'use strict';

module.exports = function(app) {
  var spot = require('../controllers/spotController');

  // spot Routes
  app.route('/spots')
    .get(spot.list_all_spots)
    .post(spot.create_a_spot);


  app.route('/spots/:spotId')
    .get(spot.read_a_spot)
    .put(spot.update_a_spot)
    .delete(spot.delete_a_spot);
};