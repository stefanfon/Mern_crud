import React from 'react';
import { Card } from 'semantic-ui-react';
import PersonCard from './person-card';

export default function PersonList({persons,deletePerson}){

	const cards = () => {
    return persons.map(person => {
      return (
        <PersonCard
         key={person._id} 
         person={person}
         deletePerson={deletePerson}/>
      )
    })
  }

  return (
    <Card.Group>
      { cards() }
    </Card.Group>
  )
}

