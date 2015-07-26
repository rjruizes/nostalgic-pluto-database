// public/models/GeoData.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var geoDataSchema = new Schema({
	latitude: Number,
	longitude: Number,
	time: String,
	url: String
});

module.exports = mongoose.model('geoData', geoDataSchema);