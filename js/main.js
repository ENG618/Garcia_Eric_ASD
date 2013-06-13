// Eric Garcia
// 1306 SDI
// Project 2

//Variables
var	sharedWith;
var errorMsg = $('#errorLink');

$('#home').on('pageinit', function(){

	// Load default data from json.js
	$('#loadRecent').on('click', function loadDefault(){
		for(var x in json){
			var id	= Math.floor(Math.random()*12345678);
			localStorage.setItem(id, JSON.stringify(json[x]));
		}
		alert('Your defaults have been loaded');
	});
});

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
	});


	// Edit individual memory

	// Delete individual memory

});

// Needed Functions:...

// Load default json data
function loadDefault () {
	// body...
};

// Get Shared With values
function getSharedWith () {
	// body...
};

// Save form to local storage
$('#saveBtn').on('click', function(){
	// body...
});

// Load image for category selected

// Load data from local storage


// 