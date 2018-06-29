//Database connection. well you will need it
var mongoose = require('mongoose')
var globalUri = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`
//var localUri = `mongodb://${process.env.DATABASE_HOST_LOCAL}/${process.env.DATABASE_HOST_LOCAL_NAME}`

var mongodbUri = globalUri
//No need of debugging in production mode
//later i will make it from environment variable
//console.log(mongodbUri)
//mongoose.set('debug', true)
mongoose.connection.openUri(mongodbUri)

var conn = mongoose.connection
conn.on('error', function () {
	console.log('connection error: Unable to connect to MongoDB')
})
conn.on('connected', function () {
	console.log('connected: MongoDB Connected')
})
conn.on('disconnected', function () {
	console.log('disconnected: MongoDB disconnected')
})


module.exports = conn