var mongoose = require('mongoose');

var tourSchema = new mongoose.Schema({
	points: [{type: mongoose.Schema.Types.ObjectId, ref: 'Point'}],
	name: String,
	from: Date,
	to: Date,
	locationFrom: {type: mongoose.Schema.Types.ObjectId, ref: 'City'},
	locationTo: {type: mongoose.Schema.Types.ObjectId, ref: 'City'},
	description: String,
	meal: String,
	transit: Boolean,
	flight: Boolean,
	meta: {
		views: Number,
		sold: Number
	}
});

var Tour = mongoose.model('Tour', tourSchema);