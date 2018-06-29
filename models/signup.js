import Mongoose from 'mongoose'
let Schema = Mongoose.Schema

let UserSchema = Schema({
	username: { type: String, required: true },
	password: { type: String, required: true }
})


export default Mongoose.model('User', UserSchema, 'users')
