//Eric Garcia
//VFW 1304
//Project 4

var json = {
	'memory1': {
		'occasion': ['Occasion: ', 'Wedding'],
		'date': ['Date: ', '2010-08-21'],
		'importance': ['Importance', '100'],
		'eventMood': ['Mood: ', 'Memorable'],
		'including': ['Shared With: ', ['Family', 'Significant other', 'Friends']],
		'notes': ['Notes: ', 'What an amazing event']
	},
	'memory2': {
		'occasion': ['Occasion: ', 'Noah was born'],
		'date': ['Date: ', '2011-12-20'],
		'importance': ['Importance: ', '100'],
		'eventMood': ['Mood: ', 'Memorable'],
		'including': ['Shared With: ', ['Family', 'Significant other']],
		'notes': ['Notes: ', 'Life changing']
	},
	'memory3': {
		'occasion': ['Occasion: ', 'Bought house'],
		'date': ['Date: ', '2013-02-07'],
		'importance': ['Importance: ', '75'],
		'eventMood': ['Mood: ', 'Memorable'],
		'including': ['Shared With: ', ['Significant other']],
		'notes': ['Notes: ', 'What an amazing event']
	},
	'memory4': {
		'occasion': ['Occasion: ', 'Bought car'],
		'date': ['Date: ', '2010-04-17'],
		'importance': ['Importance: ', '45'],
		'eventMood': ['Mood: ', 'Memorable'],
		'including': ['Shared With: ', ['Significant other']],
		'notes': ['Notes: ', '1997 Jeep Wrangler']
	},
	'memory5': {
		'occasion': ['Occasion: ', 'Bought dog'],
		'date': ['Date: ', '2011-02-10'],
		'importance': ['Importance: ', '40'],
		'eventMood': ['Mood: ', 'Memorable'],
		'including': ['Shared With: ', ['Self']],
		'notes': ['Notes: ', 'Love my Lab']
	},
	'memory6': {
		'occasion': ['Occasion: ', 'Went to Disney'],
		'date': ['Date: ', '2013-03-12'],
		'importance': ['Importance: ', '87'],
		'eventMood': ['Mood: ', 'Memorable'],
		'including': ['Shared With: ', ['Family']],
		'notes': ['Notes: ', 'Doesn\'t get any better than this']
	},
	'memory7': {
		'occasion': ['Occasion: ', 'Started School'],
		'date': ['Date: ', '2012-09-05'],
		'importance': ['Importance: ', '90'],
		'eventMood': ['Mood: ', 'Fun'],
		'including': ['Shared With: ', ['Self']],
		'notes': ['Notes: ', 'MDVBS is awesome!!']
	},
	'memory8': {
		'occasion': ['Occasion: ', 'Wife Graduated'],
		'date': ['Date: ', '2010-05-01'],
		'importance': ['Importance: ', '70'],
		'eventMood': ['Mood: ', 'Memorable'],
		'including': ['Shared With: ', ['Significant other', 'Family', 'Friends']],
		'notes': ['Notes: ', 'BSN from UCF']
	},
	'memory9': {
		'occasion': ['Occasion: ', 'Key West Vacation'],
		'date': ['Date: ', '2011-08-21'],
		'importance': ['Importance: ', '100'],
		'eventMood': ['Mood: ', 'Fun'],
		'including': ['Shared With: ', ['Significant other']],
		'notes': ['Notes: ', 'Party city...what a time!!']
	},
	'memory10': {
		'occasion': ['Occasion: ', 'Perto Rico Vacation'],
		'date': ['Date: ', '2013-04-01'],
		'importance': ['Importance: ', '70'],
		'eventMood': ['Mood: ', 'Fun'],
		'including': ['Shared With: ', ['Significant other', 'Family']],
		'notes': ['Notes: ', 'What an amazing event']
	},
	'memory11': {
		'occasion': ['Occasion: ', '25th Birthday'],
		'date': ['Date: ', '2012-06-18'],
		'importance': ['Importance: ', '85'],
		'eventMood': ['Mood: ', 'Fun'],
		'including': ['Shared With: ', ['Significant other', 'Family', 'Friends']],
		'notes': ['Notes: ', 'Don\'t remember much but that makes it all the better!']
	},
	'memory12': {
		'occasion': ['Occasion: ', 'Mom\'s Birthday'],
		'date': ['Date: ', '2013-05-04'],
		'importance': ['Importance: ', '20'],
		'eventMood': ['Mood: ', 'Fun'],
		'including': ['Shared With: ', ['Family']],
		'notes': ['Notes: ', 'Had a little shin-dig at the mother-in-law\'s']
	},
	'memory13': {
		'occasion': ['Occasion: ', 'Some sad event :('],
		'date': ['Date: ', '2008-02-04'],
		'importance': ['Importance: ', '0'],
		'eventMood': ['Mood: ', 'Sad'],
		'including': ['Shared With: ', ['Other']],
		'notes': ['Notes: ', 'Sad times are the worst.']
	},
	'memory14': {
		'occasion': ['Occasion: ', 'Graduated High School'],
		'date': ['Date: ', '2005-05-10'],
		'importance': ['Importance: ', '95'],
		'eventMood': ['Mood: ', 'Memorable'],
		'including': ['Shared With: ', ['Friends']],
		'notes': ['Notes: ', 'Life begins now.']
	},
	'memory15': {
		'occasion': ['Occasion: ', 'Date Night'],
		'date': ['Date: ', '2013-05-04'],
		'importance': ['Importance: ', '55'],
		'eventMood': ['Mood: ', 'Fun'],
		'including': ['Shared With: ', ['Significant other']],
		'notes': ['Notes: ', 'Love datenights ;)']
	},
	'memory16': {
		'occasion': ['Occasion: ', 'Another sad day'],
		'date': ['Date: ', '2012-12-13'],
		'importance': ['Importance: ', '10'],
		'eventMood': ['Mood: ', 'Sad'],
		'including': ['Shared With: ', ['Co-workers']],
		'notes': ['Notes: ', 'Boo hoo']
	},
	'memory17': {
		'occasion': ['Occasion: ', 'Creating all this "JSON"'],
		'date': ['Date: ', '2013-05-07'],
		'importance': ['Importance: ', '100'],
		'eventMood': ['Mood: ', 'Sad'],
		'including': ['Shared With: ', ['Self']],
		'notes': ['Notes: ', 'It\' hard coming up with all this data']
	},
	'memory18': {
		'occasion': ['Occasion: ', 'Installed water softner'],
		'date': ['Date: ', '2013-05-03'],
		'importance': ['Importance: ', '75'],
		'eventMood': ['Mood: ', 'Sad'],
		'including': ['Shared With: ', ['Significant other', 'Self']],
		'notes': ['Notes: ', 'Was a pain, but it feels so good to have clean soft water']
	},
	'memory19': {
		'occasion': ['Occasion: ', 'Noah got sick'],
		'date': ['Date: ', '2012-12-17'],
		'importance': ['Importance: ', '70'],
		'eventMood': ['Mood: ', 'Sad'],
		'including': ['Shared With: ', ['Family']],
		'notes': ['Notes: ', 'Long nights awake.']
	},
	'memory20': {
		'occasion': ['Occasion: ', 'Edit me'],
		'date': ['Date: ', '2013-04-30'],
		'importance': ['Importance: ', '25'],
		'eventMood': ['Mood: ', 'Sad'],
		'including': ['Shared With: ', ['Other']],
		'notes': ['Notes: ', 'What an amazing event']
	}

};