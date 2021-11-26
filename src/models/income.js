const moongose = require('mongoose')
const Schema = mongoose.Schema

const Income = new Schema({
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User'
    },
    value: {
        type: Number,
        min: 5000,
        max: 1500000
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

Income.pre('save', function(next){
    if(this.value <= 50000){
    this.value -= 1000
    }
    next()
})

module.exports = moongose.model('incomes', Income)