var mongoose = require('mongoose');

var pointSchema = mongoose.Schema({
	city: {type: mongoose.Schema.Types.ObjectId, ref: 'City'},
	date: Date,
	period: Date,
	description: String
});

var Point = mongoose.model('Point', pointSchema);