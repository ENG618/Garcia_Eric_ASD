// Eric Garcia
// 1306 SDI
// Project 3

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

	// Load Data Function
	$("#loadLocal").on("click", function loadData(){
		if(localStorage.length === 0){
			console.log('The local storage is equal to 0');
			alert("There are no memories to display");
			loadDefault();
		}else{
			// Load from local storage
			console.log(localStorage.length);
			for (var i=0; i<localStorage.length; i++){
			$('<li><a href="#addItem" data-transition="slide" data-icon="edit">test</li>')
				.appendTo('#recentMemList')
				.slideDown()
			;
			}


	// 		var makeDiv = document.createElement("div");
	// 		makeDiv.setAttribute("id", "memories");
	// 		var makeList = document.createElement("ul");
	// 		makeDiv.appendChild(makeList);
	// 		document.body.appendChild(makeDiv);
	// 		$("memories").style.display = "block";
	// 		for (var i=0; i<localStorage.length; i++){
	// 			var makeLi = document.createElement("li");
	// 			var linksLi = document.createElement("li");
	// 			makeList.appendChild(makeLi);
	// 			var key = localStorage.key(i);
	// 			var value = localStorage.getItem(key);
	// 			// Convert sting from local storage to object
	// 			var obj = JSON.parse(value);
	// 			// Creating another list for each memory
	// 			var makeSubList = document.createElement("ul");
	// 			makeLi.appendChild(makeSubList);
	// 			loadImg(makeSubList, obj.eventMood[1]);
	// 			for (var n in obj){
	// 				var makeSubLi = document.createElement("li");
	// 				makeSubList.appendChild(makeSubLi);
	// 				var optSubText = obj[n][0]+" "+obj[n][1];
	// 				makeSubLi.innerHTML = optSubText;
	// 				makeSubList.appendChild(linksLi);
	// 			}
	// 			makeItemLinks(localStorage.key(i), linksLi);
	//		}
		}
});

	// Load JSON
	$("#loadJSON").on("click", function(){
		$.ajax({
			url:"xhr/data.json",
			type:"GET",
			dataType:"json",
			success:function(data) {
				console.log(data);
				console.log(x);
				$.each(data, function(i, memory){
					$('#recentMemList').append(
						$('<ul>')
					);
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
			url:"xhr/data.xml",
			type:"GET",
			dataType:"xml",
			success:function(data, status) {
				console.log(status, data);
				$.parseXML(data);
			},
			error: function(error, parseerror) {
				console.log(error, parseerror);
			}
		});
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

	// Edit individual memory

	// Delete individual memory

	loadDefault();

});// End Recent Mem page script




// Needed Functions:...

// Load image for category selected


