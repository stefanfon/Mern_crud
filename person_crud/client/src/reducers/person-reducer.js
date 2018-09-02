const defaultState={
	persons:[],
	person:{}
	
}

export default(state=defaultState,action={})=>{
	switch(action.type){
		case "FETCH_PERSONS":{
			console.log("radeesi");
			console.log(action.payload);
			
			return {
        ...state,
        persons:   action.payload.persons
		}
		}
		case 'NEW_PERSON': {
      return {
        ...state,
        person: {}
      }
    }
    case "FETCH_PERSON":{
    	console.log("vratio ga je");
    	console.log(action.payload.person[0]);
    	return{
    	...state,
    	person:action.payload.person[0]
    }
    }
    case "DELETE_PERSON":{

    	console.log(action.payload);
    	var _id=action.payload;
    	return{
    		...state,
    		persons:state.persons.filter(p=>p._id!==_id)
    	}
    }

    
		default:
		return state;
	}
}