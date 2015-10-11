var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/myDatabase';
mongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server.");
	showData(db, function() { db.close(); });
});

function showData(db, callback) {
	var rabbitsCol = db.collection('rabbits');
	var rabbits = rabbitsCol.find();

	rabbits.each(function(err, doc) {
		assert.equal(err, null);
		if (doc != null) {
			console.dir(doc);
		} else {
			callback();
		}
	});
	
	
}