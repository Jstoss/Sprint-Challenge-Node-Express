const express = require('express');
const actions = require('../../data/helpers/actionModel');

const router = express.Router();

//GET all actions
router.get('/', (req, res) => {
  actions.get()
          .then(actions => res.status(200).json(actions))
          .catch(err => res.status(500).json({ error: "Failed to retrieve Actions" }));
});

//GET project by id
router.get('/:id', (req, res) => {
  actions.get(req.params.id)
          .then(action => res.status(200).json(action))
          .catch(err => res.status(500).json({ error: "Failed to retrieve Action" }));
});

//POST new action, requires project_id, description, notes
router.post('/', (req, res) => {
  const { project_id, description, notes } = req.body;

  if(!project_id || !description || !notes) return res.status(422).json({ message: "Project id, description, and notes are required"});

  actions.insert(req.body)
          .then(newAction => res.status(200).json(newAction))
          .catch(err => res.status(500).json({ error: "Failed to add new action" }));
});

//DELETE action by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  actions.remove(id)
          .then(deleted => deleted === 1 ?
                            res.status(201).json({ message: `Action with id ${id} deleted.` }) :
                            res.status(500).json({ error: "Invalid Action ID"})
          )
          .catch(err => res.status(500).json({ error: `Database failure on Deleting action with id ${id}` }));
});

//edit action by id
router.put('/:id', (req, res) => {
  const { id } = req.params;

  actions.update(id, req.body)
          .then(updatedAct => updatedAct ? res.status(200).json(updatedAct) :
                                           res.status(404).json({ message: "Invalid Action ID" })
          )
          .catch(err => res.status(500).json({ error: `Database Failure on Updating Action with id ${id}` }));
});

module.exports = router;
