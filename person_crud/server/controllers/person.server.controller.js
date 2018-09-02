import mongoose from 'mongoose';

import Person from '../models/person.server.model';

export const getPersons=(req,res)=>{
	Person.find().exec((err,persons)=>{
		if(err){
			return res.json({'success':false,'message':'Error'});
		}
		return res.json({'seccess':true,'message':'Persons fatch successfuly',persons});
	})
}

export const addPerson=(req,res)=>{
	console.log("Usao");
	console.log(req.body);
	const newPerson=new Person(req.body);
	newPerson.save((err,person)=>{
		if(err){
			return res.json({'success':false,'message':Error});
		}
		return res.json({'success':true,'message':'Person added successfullu',person});
	})
}
export const updatePerson=(req,res)=>{
	console.log("usao")
	Person.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err,person)=>{
		if(err){
			
			return res.json({'success':false,'message':'Error'});
		}
		console.log('radi')
		return res.json({'success':true,'message':'Person updated successfully',person});
	})
}
export const getPerson=(req,res)=>{
	Person.find({_id:req.params.id}).exec((err,person)=>{
		if(err){
			return res.json({'success':false,'message':'Error'});

		}
		return res.json({'success':true,'message':'Person fetched successfully by id',person});
	})
}
export const deletePerson=(req,res)=>{
	Person.findByIdAndRemove({_id:req.params.id},(err,person)=>{
		if(err){
			return res.json({'success':false,'message':'Error'});

		}
		return res.json({'success':true,'message':"Person deleted successfully"});

	})
}