import Mongoose from 'mongoose'
let Schema = Mongoose.Schema

let UserSchema = Schema({
	username: { type: String, required: true },
	email:{	type: String, required: true},
	password: { type: String, required: true },
	contact_no:{ type: String, required:true}
})


module.exports =  Mongoose.model('Signup', UserSchema)
