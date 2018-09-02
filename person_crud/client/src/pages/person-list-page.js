import React, { Component} from 'react';
import PersonList from '../components/person-list';
import {connect} from 'react-redux';
import {fetchPersons, deletePerson} from '../actions/person.actions';



class PersonListPage extends Component {

	componentDidMount(){
		this.props.fetchPersons();
	}

  render() {
    return (
      <div>
        <h1>List  Persons</h1>
        <PersonList persons={this.props.persons} deletePerson={this.props.deletePerson}/>
      </div>
    )
  }
}


function mapStateToProps(state){
	return{
		persons:state.personStore.persons
	}
}

export default connect(mapStateToProps,{fetchPersons,deletePerson})(PersonListPage);