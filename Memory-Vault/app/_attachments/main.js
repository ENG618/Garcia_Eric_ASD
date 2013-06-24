// Eric Garcia
// 1306 SDI
// Project 4

//Variables
var	sharedWith;
var errorMsg = $("#errorLink");

// Global functions

// Load default data from json
var loadDefault = function(){
	for(var x in json){
		var id	= Math.floor(Math.random()*12345678);
		localStorage.setItem(id, JSON.stringify(json[x]));
	}
	console.log('So I have loaded dummy data');
	alert("Your defaults have been loaded");
};// End Load default data from json.js

// Loops data a prints it to screen
var dataLoop = function (source) {
	for (var i=0; i<source.length; i++){
		var key = source.key(i);
		var value = source.getItem(key);
		// Convert sting from local storage to object
		var obj = JSON.parse(value);
		console.log(obj.occasion);
		$(	'<li>' +
			'<a href="#addItem" data-transition="slide" data-icon="edit">' +
			'<h2>' + obj.occasion + '</h2>' +
			'<p>' + obj.date + '</p>' +
			'<p>' + obj.importance + '</p>' +
			'<p>' + obj.notes + '</p></a>' +
			'<a href="#deleteMem" data-rel="popup" data-position-to="window" data-transition="pop">Delete Memory</a>' +
			'</li>')
		.appendTo('#recentMemList')
		.slideDown()
		;
	}// End for loop
};// End dataLoop


// Home page load complete
$("#home").on("pageinit", function(){
});// End Home page script


// Add Item page load complete
$("#addItem").on("pageinit", function(){

	// Save Memory to Local Storage
	$("#saveBtn").on("click", function(x, key){
		console.log(key);
		var id;
		if(!key){
			id = Math.floor(Math.random()*123456789);
		}else{
			id=key;
		}
		console.log(id);
		var memory = {};
		memory.occasion = ["Occasion: ", $("#occasion").val()];
		memory.date = ["Date: ", $("#date").val()];
		memory.importance = ["Importance: ", $("#importance").val()];
		// memory.mood = ["Mood: ", $("#mood"), $("#mood").val()];
		// memory.sharedWithd = ["Shared With: ", getCheckedValues()];
		memory.notes = ["Notes: ", $("#notes").val()];
		// Save data to local Storage
		localStorage.setItem(id, JSON.stringify(memory));
		alert("Your memory is safe!!");
	});// End Save Memory to Local Storage
});// End Add Item page script


// Recent Mem page load complete
$("#recentMem").on("pageinit", function(){

	// Loading default data
	if(localStorage.length === 0){
		alert('There are no memories to display');
		loadDefault();
			// Load from local storage
			dataLoop(localStorage);
		}

	// Load Data Function
	$("#loadLocal").on("click", function loadData(){
		if(localStorage.length === 0){
			console.log('The local storage is equal to 0');
			alert("There are no memories to display");
			// loadDefault();
		}else{
			// Load from local storage
			console.log(localStorage.length);
			for (var i=0; i<localStorage.length; i++){
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				// Convert sting from local storage to object
				var obj = JSON.parse(value);
				console.log(obj.occasion);
				$(	'<li>' +
						'<a href="#addItem" data-transition="slide" data-icon="edit">' +
							'<h2>' + obj.occasion + '</h2>' +
							'<p>' + obj.date + '</p>' +
							'<p>' + obj.importance + '</p>' +
							'<p>' + obj.notes + '</p></a>' +
	        			'<a href="#deleteMem" data-rel="popup" data-position-to="window" data-transition="pop">Delete Memory</a>' + 
	        		'</li>')
					.appendTo('#recentMemList')
					.slideDown()
				;
			}
		}
	});

	// Load JSON
	$("#loadJSON").on("click", function(){
		$.ajax({
			url:"data.json",
			type:"GET",
			dataType:"json",
			success:function(data) {
				console.log(data);
				$.each(data, function(i, memory){
					console.log(memory);
					console.log(memory.occasion);
					$(	'<li>' +
						'<a href="#addItem" data-transition="slide" data-icon="edit">' +
						'<h2>' + memory.occasion + '</h2>' +
						'<p>Date: ' + memory.date + '</p>' +
						'<p>Important: ' + memory.importance + '</p>' +
						'<p>Notes: ' + memory.notes + '</p></a>' +
						'<a href="#deleteMem" data-rel="popup" data-position-to="window" data-transition="pop">Delete Memory</a>' +
						'</li>')
						.appendTo('#recentMemList')
						.slideDown()
					;
				});
			},
			error: function(error, parseerror) {
				console.log(error, parseerror);
			}
		});
	});

	// Load XML
	$("#loadXML").on("click", function(){
		$.ajax({
			url:"data.xml",
			type:"GET",
			dataType:"xml",
			success:function(data, status) {
				console.log(status, data);
				$.parseXML(data);
				console.log(data);
				$.each(data, function(i, memory){
					console.log(memory);
					console.log(memory.occasion);
					// $(	'<li>' +
					// 	'<a href="#addItem" data-transition="slide" data-icon="edit">' +
					// 	'<h2>' + memory.occasion + '</h2>' +
					// 	'<p>Date: ' + memory.date + '</p>' +
					// 	'<p>Important: ' + memory.importance + '</p>' +
					// 	'<p>Notes: ' + memory.notes + '</p></a>' +
					// 	'<a href="#deleteMem" data-rel="popup" data-position-to="window" data-transition="pop">Delete Memory</a>' +
					// 	'</li>')
					// 	.appendTo('#recentMemList')
					// 	.slideDown()
					// ;
				});
			},
			error: function(error, parseerror) {
				console.log(error, parseerror);
			}
		});
	});


	// Edit individual memory


	// Delete individual memory
	$('#popDelete').on('click', function(){
		localStorage.removeItem(this.key);
		alert('Memory has been forgotten');
	});

	// Clear local storage
	$("#clearSavedData").on("click", function clearData(){
		if(localStorage.length === 0){
			alert("There are no memories to clear");
		}else{
			var ask = confirm("This will cause you to forget all memories...Are you sure you want to do this?");
			if(ask){
			localStorage.clear();
			alert("All memories have been forgotten");
			return false;
			}else{
				alert("All your memories are still safe!!");
			}
		}
	});// End Clear local storage

});// End Recent Mem page script




// Needed Functions:...

// Load image for category selected


