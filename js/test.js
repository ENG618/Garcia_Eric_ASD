$ajax({
	url:'data.json',
	type:'GET',
	dataType:'json',
	success:function(data, status) {
		console.log=(status, data);
	},
	error: function(error, parseerror) {
		console.log=(error, parseerror);
	}
});