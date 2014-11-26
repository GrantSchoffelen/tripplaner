var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplaner');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var PlaceSchema = new mongoose.Schema({
	address: String,
	city: String,
	state: String,
	phone: String,
	location: [Number, Number]
});


var HotelSchema = new mongoose.Schema({
	  name: String,
	  place: [PlaceSchema],
	  num_stars: Number,
	  amenities: String
});

var ThingsToDoSchema = new mongoose.Schema({
	  name: String,
	  place: [PlaceSchema],
	  age_range: String
});

var RestaurantSchema = new mongoose.Schema({
	name: String, 
	place: [PlaceSchema],
	cuisine: String, 
	price: Number 
})



module.exports = {
	Place: mongoose.model('Place', PlaceSchema),
	Hotel: mongoose.model('Hotel', HotelSchema),
	ThingsToDo: mongoose.model('ThingsToDo', ThingsToDoSchema),
	Restaurant: mongoose.model('Restaurant', RestaurantSchema)
}