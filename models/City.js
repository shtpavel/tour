var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
	title: String,
	code: String,
	coutry: {type: mongoose.Schema.Types.ObjectId, ref: 'Country'}
});

var City = mongoose.model('City', citySchema);