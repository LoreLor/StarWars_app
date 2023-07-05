const { Schema }  = require('mongoose')

const filmSchema = new Schema({
    _id: {
        type: String,
        unique:true
    },
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{
        type: String,
        ref: "Character"
    }],
    planets: [{
        type: String,
        ref: "Planet"
    }]
})

filmSchema.statics.list = async function(){
    return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"])
}

module.exports = filmSchema