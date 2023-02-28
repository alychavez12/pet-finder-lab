const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	id: String,
	shelterId: String,
	name: String,
	photo: String,
    description:String,
	age: String,
	animal: String,
	breed: String,
	sex: String,
    city: String,
    state: String,
    postcode: String,
    status: String
})

module.exports = mongoose.model("petFinder", PetSchema);
