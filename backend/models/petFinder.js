const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	id: String,
	shelterId: String,
	name: String,
	photo: String,
	age: String,
	animal: String,
	breed: String,
	sex: String
})

module.exports = mongoose.model("petFinder", PetSchema);
