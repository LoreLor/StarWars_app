const { Schema } = require('mongoose');

const characterSchema = new Schema({
    _id: {
        type: String,
        unique: true,
    },
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: {
        type: String,
        enum: ["male", "female", "n/a"],
    },
    species: String,
    homeworld: {  // referencia al planeta de origen
        type: String,
        ref: "Planet"
    },
    image: String,
    films: [{  // refiere a las peliculas en las actuó
        type: String,
        ref: "Film"
    }]
})

characterSchema.statics.list = async function(){
    return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"])
}

characterSchema.statics.get = async function(id){
    return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"])
}

characterSchema.statics.insert = async function(character){
    return await this.create(character)
}



module.exports = characterSchema