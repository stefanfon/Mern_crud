import React from 'react';
import {Card,Button,Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';






export default function PersonCard({person,deletePerson}){
	


	return(

			<Card>
				<Card.Content>
					<Card.Header>
						<Icon name='user outline'/>{person.name}{"  "}{person.surname}
					</Card.Header>
					<Card.Description>
          				<p><Icon name='phone'/> {person.phone}</p>
         				
        			</Card.Description>
				</Card.Content>
				<Card.Content>
					<Card.Description>	
					<p>City : {person.city}</p>
					<p>Addresss: {person.address}</p>
					</Card.Description>

				</Card.Content>
				<Card.Content>
       				 <div className="ui two buttons">
         				  <Link to={`/persons/edit/${person._id}`} className="ui basic button green">Edit</Link>
          				<Button basic color="red" onClick={() => deletePerson(person._id)} >Delete</Button>
        				</div>
      				</Card.Content>

			</Card>

		)

	PersonCard.propTypes = {
  person: React.PropTypes.object.isRequired
}
}