// Eric Garcia
// 1306 SDI
// Project 3

//Variables
var	sharedWith;
var errorMsg = $('#errorLink');


// Home page load complete
$('#home').on('pageinit', function(){

});// End Home page script


// Add Item page load complete
$('#addItem').on('pageinit', function(){

	// Save Memory to Local Storage
	$('#saveBtn').on('click', function(x, key){
		console.log(key);
		var id;
		if(!key){
			id = Math.floor(Math.random()*123456789);
		}else{
			id=key;
		}

		console.log(id);
		var memory = {};
		memory.occasion = ['Occasion: ', $('#occasion').val()];
		memory.date = ['Date: ', $('#date').val()];
		memory.importance = ['Importance: ', $('#importance').val()];
		// memory.mood = ['Mood: ', $('#mood'), $('#mood').val()];
		// memory.sharedWithd = ['Shared With: ', getCheckedValues()];
		memory.notes = ['Notes: ', $('#notes').val()];
		// Save data to local Storage
		localStorage.setItem(id, JSON.stringify(memory));
		alert('Your memory is safe!!');



	});// End Save Memory to Local Storage
});// End Add Item page script


// Recent Mem page load complete
$('#recentMem').on('pageinit', function(){

	// Load default data from json.js
	function loadDefault(){
		for(var x in json){
			var id	= Math.floor(Math.random()*12345678);
			localStorage.setItem(id, JSON.stringify(json[x]));
		}
		alert('Your defaults have been loaded');
	}// End Load default data from json.js

	// Load Data Function
	function loadData(){
		if(localStorage.length === 0){
			alert('There are no memories to display');
			loadDefault();
		// }else{
			// Load from local storage
	// 		var makeDiv = document.createElement('div');
	// 		makeDiv.setAttribute('id', 'memories');
	// 		var makeList = document.createElement('ul');
	// 		makeDiv.appendChild(makeList);
	// 		document.body.appendChild(makeDiv);
	// 		$('memories').style.display = 'block';
	// 		for (var i=0; i<localStorage.length; i++){
	// 			var makeLi = document.createElement('li');
	// 			var linksLi = document.createElement('li');
	// 			makeList.appendChild(makeLi);
	// 			var key = localStorage.key(i);
	// 			var value = localStorage.getItem(key);
	// 			// Convert sting from local storage to object
	// 			var obj = JSON.parse(value);
	// 			// Creating another list for each memory
	// 			var makeSubList = document.createElement('ul');
	// 			makeLi.appendChild(makeSubList);
	// 			loadImg(makeSubList, obj.eventMood[1]);
	// 			for (var n in obj){
	// 				var makeSubLi = document.createElement('li');
	// 				makeSubList.appendChild(makeSubLi);
	// 				var optSubText = obj[n][0]+' '+obj[n][1];
	// 				makeSubLi.innerHTML = optSubText;
	// 				makeSubList.appendChild(linksLi);
	// 			}
	// 			makeItemLinks(localStorage.key(i), linksLi);
	// 		}
		}
	}

	// Load JSON
	$('#loadJSON').on('click', function(){
		$.ajax({
			url:'js/data.json',
			type:'GET',
			dataType:'json',
			success:function(data) {
				console.log(data);
			},
			error: function(error, parseerror) {
				console.log(error, parseerror);
			}
		});
	});

	// Load XML
	$('#loadXML').on('click', function(){
		$.ajax({
			url:'js/data.xml',
			type:'GET',
			dataType:'xml',
			success:function(data) {
				console.log(data);
			},
			error: function(error, parseerror) {
				console.log(error, parseerror);
			}
		});
	});

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

	loadData();

});// End Recent Mem page script

// Needed Functions:...

// Load image for category selected

// Load data from local storage




