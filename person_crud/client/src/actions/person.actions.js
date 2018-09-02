

import { client } from './';
import axios from "axios";
const api='/api';
		

export function fetchPersons(){

	return dispatch => {
		var promise=client.get(api);
		
		promise.then(result=>result.data)
		.then(data=>{
			dispatch({
      type: 'FETCH_PERSONS',
      payload: data
    })
		})
    
  }
  
}
export function newPerson() {
  return dispatch => {
    dispatch({
      type: 'NEW_PERSON'
    })
  }
}

export function savePerson(person) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_PERSON',
      payload: client.post(api, person)
    })
  }
}
export function fetchPerson(_id){
	
	return dispatch=>{
		var promise=client.get(`${api}/${_id}`);
		console.log(promise)
		promise.then(result=>result.data)
		.then(data=>{
			console.log(data)
			dispatch({
				type:'FETCH_PERSON',
				payload:data
			})
		})
		
	}
}
export function updatePerson(person){
	console.log("dosao u update");
	console.log(person);
	return dispatch=>{
		return dispatch({
			type:'UPDATE_PERSON',
			payload: client.put(`${api}/${person._id}`,person)
		})
	}
}


export function deletePerson(_id) {
	console.log('dosao da brise');
	return dispatch=>{
	var prommise=client.delete(api+"/"+_id);
 	prommise.then(result=>result.data)
 	.then(data=>{
 		dispatch({
				type:'DELETE_PERSON',
				payload:_id
			})
 	})
 }
}

