import mongoose from 'mongoose';

var Schema=mongoose.Schema;


var Person=new Schema({
	//Id, Name, Surname, CreatedDate, City, Address, Phone
	name :String,
	surname: String,
	createdDate:{type:Date, default:Date.now},
	city: String,
	address:String,
	phone: String

});



export default mongoose.model('Person', Person);