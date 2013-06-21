function (doc){
	if (doc._id.substr(0, 6) === "Memory"){
		emit(doc._id, {
			"occasion": doc.occasion,
			"date": doc.date,
			"importance": doc.importance,
			"eventMood": doc.eventMood,
			"including": doc.including,
			"notes": doc.notes 
		});
	}
};