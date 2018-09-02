import express from 'express';


import * as personController from '../controllers/person.server.controller';


const router=express.Router();

router.route('/')
	.get(personController.getPersons)
	.post(personController.addPerson);


router.route('/:id')
	.get(personController.getPerson)
		.put(personController.updatePerson)

	.delete(personController.deletePerson);

export default router;