"use strict"
class ResourceController{
	constructor(model){
	  this.model = model;
	 
	}
}
ResourceController.prototype.create = function(req, res) {
	this.model
		.create(req.body.payload)
		.then(result =>  {
			res.send(result)
		})
		.catch(err =>  {
			res.status(500).json( {
				message:"Error creating resource", 
				err:err
			}) 
		}) 
		
}
export default ResourceController