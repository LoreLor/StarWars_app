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
    homeworld: {  // referencia al planeta de origen
        type: String,
        ref: "Planet"
    },
    films: [{  // refiere a las peliculas en las actuó
        type: String,
        ref: "Film"
    }]
})

characterSchema.statics.list = async function(){
    return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "film"])
}

characterSchema.statics.getId = async function(_id){
    return await this.findById(_id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "film"])
}

characterSchema.statics.insert = async function(character){
    return await this.create(character)
}

characterSchema.statics.delete = async function(_id){
    return await this.deleteOne({_id:_id})
}

module.exports = characterSchema