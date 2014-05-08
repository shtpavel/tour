var mongoose = require('mongoose');

var countrySchema = new mongoose.Schema({
	title: String,
	code: String,
	cities: [{type: mongoose.Schema.Types.ObjectId, ref: 'City'}]
});

var Coutry = mongoose.model('Coutry', countrySchema);