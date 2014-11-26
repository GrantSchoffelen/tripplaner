var express = require('express');
var router = express.Router();
var models = require('../models'); 
var q = require("q"); 


router.get('/', function(req, res) {
// 	models.Hotel.find(function(err,results) {
// 		models.ThingsToDo.find(function(err, things){
// 			models.Restaurant.find(function(err, restaurants){

// 				res.render('index', { 
// 					hotels: results, 
// 					title: "Trip Planner",
// 					things_to_do: things, 
// 					restaurants: restaurants
// 					 })

			
// 		})

		
// 	})
// })
// })

	var hotel_promise = models.Hotel.find().exec();
	var thing_promise = models.ThingsToDo.find().exec();
	var res_promise = models.Restaurant.find().exec();

	q.all([hotel_promise, thing_promise, res_promise]).then(function(results){
		res.render('index', {
			hotels: results[0], 
			things_to_do: results[1], 
			restaurants: results[2],
			title: "Trip Planner"
		})
	})
});

// /* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
