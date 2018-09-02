import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import PersonListPage from './pages/person-list-page';
import PersonFormPage from './pages/person-form-page';





class App extends Component {



  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Person List
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/persons/new">
            Add Person
          </NavLink>
         
          
        </div>
        <Route exact path="/" component={PersonListPage}/>
        <Route path="/persons/new" component={PersonFormPage}/>
        <Route path="/persons/edit/:_id" component={PersonFormPage}/>
      </Container>
    );
  }
}

export default App;
