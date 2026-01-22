const mongoose = require('mongoose')
const analyticsSchema = new mongoose.Schema({
    page:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    ipAddress:{
        type:String
    },
    userAgent:{
        type:String
    },
    referrer:{
        type:String
    },
    deviceType:{
        type:String,
        enum:['desktop','mobile','tablet','bot','unknown']
    },
    browser:{
        type:String
    },
    os:{
        type:String
    },
    timestamp:{
        type:Date,
        default:Date.now
    }

})
module.exports = mongoose.model('Analytics',analyticsSchema)