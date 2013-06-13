// Eric Garcia
// 1306 SDI
// Project 2

//Variables
var	sharedWith;
var errorMsg = $('#errorLink');

// Home page load complete
$('#home').on('pageinit', function(){
	// Load default data from json.js
	$('#loadRecent').on('click', function loadDefault(){
		for(var x in json){
			var id	= Math.floor(Math.random()*12345678);
			localStorage.setItem(id, JSON.stringify(json[x]));
		}
		alert('Your defaults have been loaded');
	});// End Load default data from json.js
});// Eng Home page load complete


// Add Item page load complete
$('#addItem').on('pageinit', function(){
	// Save Memory to Local Storage
	$('#saveBtn').on('click', function(key){
		if(!key){
			var id = Math.floor(Math.random()*123456789);
		}else{
			id=key;
		}
		var memory = {};
		memory.occasion = ['Occasion: ', $('#occasion').val()];
		memory.date = ['Date: ', $('#date').val()];
		memory.importance = ['Importance: ', $('#importance').val()];
		// memory.mood = ['Mood: ', $('#mood'), $('#mood').val()];
		memory.sharedWithd = ['Shared With: ', $('#sharedWith').val()];
		memory.notes = ['Notes: ', $('#notes').val()];
		// Save data to local Storage
		localStorage.setItem(id, JSON.stringify(memory));
		alert('Your memory is safe!!');



	});// End Save Memory to Local Storage
});// End Add Item page load complete


// Recent Mem page load complete
$('#recentMem').on('pageinit', function(){
	// Clear local storage
	$('#clearSavedData').on('click', function clearData(){
		if(localStorage.length === 0){
			alert('There are no memories to clear');
		}else{
			var ask = confirm('This will cause you to forget all memories...Are you sure you want to do this?');
			if(ask){
			localStorage.clear();
			alert('All memories have been forgotten');
			return false;
			}else{
				alert('All your memories are still safe!!');
			}
		}
	});// End Clear local storage


	// Edit individual memory

	// Delete individual memory

});// End Recent Mem page load complete

// Needed Functions:...

// Load default json data
function loadDefault () {
	// body...
};

// Get Shared With values
function getSharedWith () {
	// body...
};


// Load image for category selected

// Load data from local storage


// 