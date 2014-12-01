$(document).ready(function() {


	var i = 1;
	var h = 0;
	var f = 0; 


	all_hotels.forEach(function(hotel) {

		
		var dropdownEl = "<option value =" + hotel['place'][0]['location'][0] + "," + hotel['place'][0]['location'][1] + '>' + hotel.name + "</option>";
		$('#hotel_select').append(dropdownEl);

	});

	all_things_to_do.forEach(function(things) {

		var dropdownEl = "<option value =" + things['place'][0]['location'][0] + "," + things['place'][0]['location'][1] + '>' + things.name + "</option>";
		$('#thing_select').append(dropdownEl);
	})

	all_restaurants.forEach(function(restaurant) {
		var dropdownEl = "<option value =" + restaurant['place'][0]['location'][0] + "," + restaurant['place'][0]['location'][1] + '>' + restaurant.name + "</option>";
		$('#restaurant_select').append(dropdownEl);
	})

		$('#add_day').click(function() {

		if (i < 7) {
			$('#buttons').append("<a href ='day" + i + "' class='btn btn-default grant'>" + "Day " + i + "</a>")
			i++
		}
	})

	$('#remove_day').click(function() {
		$('.grant:last').remove()
		i--
		if (i < 1) {
			i = 1
		}
	})


	$('#add_hotel').click(function() {
		if (h<1){
		$('#hotels_list').append("<li>" + $('#hotel_select option:selected').text() + "</li>")
		var myLatlng = new google.maps.LatLng(Number($('#hotel_select option:selected').val().split(',')[0]), Number($('#hotel_select option:selected').val().split(',')[1]));
		//make a marker
		var marker = new google.maps.Marker({
			position: myLatlng,
			title: $('#hotel_select option:selected').text(),
			icon: '/images/hotel-48.png'
		});

		var map_canvas_obj = document.getElementById("map-canvas");
		var mapOptions = {
			center: myLatlng,
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		//that 
		marker.setMap(map)
		h++; 
	}

	})

	$('#add_thing').click(function() {
		$('#things_list').append("<li>" + $('#thing_select option:selected').text() + "</li>")
		var myLatlng = new google.maps.LatLng(Number($('#thing_select option:selected').val().split(',')[0]), Number($('#thing_select option:selected').val().split(',')[1]));
		//make a marker
		var marker = new google.maps.Marker({
			position: myLatlng,
			title: $('#thing_select option:selected').text(),
			icon: '/images/map-marker-48.png'
		});

		var map_canvas_obj = document.getElementById("map-canvas");
		var mapOptions = {
			center: myLatlng,
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		//that 
		marker.setMap(map)
	})

	$('#add_restaurant').click(function() {
		if (f<3) {
		$('#restaurants_list').append("<li>" + $('#restaurant_select option:selected').text() + "</li>")
		var myLatlng = new google.maps.LatLng(Number($('#restaurant_select option:selected').val().split(',')[0]), Number($('#restaurant_select option:selected').val().split(',')[1]));
		//make a marker
		var marker = new google.maps.Marker({
			position: myLatlng,
			title: $('#restaurant_select option:selected').text(),
			icon: '/images/restaurant-48.png'

		});

		var map_canvas_obj = document.getElementById("map-canvas");
		var mapOptions = {
			center: myLatlng,
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		//that 
		marker.setMap(map)
		f++
		}
	})




	function initialize_gmaps() {

		// initialize new google maps LatLng object
		var myLatlng = new google.maps.LatLng(40.705786, -74.007672);
		//var test = new google.maps.LatLng(45, 45.1); 

		// set the map options hash
		var mapOptions = {
			center: myLatlng,
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		// get the maps div's HTML obj
		var map_canvas_obj = document.getElementById("map-canvas");

		// initialize a new Google Map with the options
		window.map = new google.maps.Map(map_canvas_obj, mapOptions);

		// Add the marker to the map
		var marker = new google.maps.Marker({
			position: myLatlng,
			title: "Jello World!"
		});

		// Add the marker to the map by calling setMap()
		marker.setMap(map);
	}

	$(document).ready(function() {
		initialize_gmaps();
	});



})