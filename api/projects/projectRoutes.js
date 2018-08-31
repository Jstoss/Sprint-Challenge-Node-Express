const express = require('express');
const projects = require('../../data/helpers/projectModel');

const router = express.Router();

//GET all projects
router.get('/', (req, res) => {
  projects.get()
          .then(projects => res.status(200).json(projects))
          .catch(err => res.status(500).json({ error: "Failed to retrieve Projects." }));
});

//GET post by id
router.get('/:id', (req, res) => {
  projects.get(req.params.id)
          .then(project => res.status(200).json(project))
          .catch(err => res.status(500).json({ error: "Failed to retrieve Project." }));
});

router.post('/', (req, res) => {
  const { name, description, completed } = req.body;

  if(!name || !description) res.status(422).json({ message: "A name and description is required" });

  projects.insert(req.body)
          .then(newPrj => res.status(200).json(newPrj))
          .catch(err => res.status(500).json({ error: "Failed to add new project" }));
});

//DELETE post by id
router.delete('/:id', (req, res) => {
  const { id } =  req.params;

  projects.remove(id)
          .then(deleted => deleted === 1 ?
                            res.status(201).json({ message: `Project with id ${id} deleted.` }) :
                            res.status(500).json({ error: "Invalid Project ID" })
          )
          .catch(err => res.status(500).json({ error: `Database Failure on Deleting Project with id ${id}` }));
});

//edit post by id
router.put('/:id', (req, res) => {
  const { id } = req.params;

  projects.update(id, req.body)
          .then(updatedPrj => updatedPrj ? res.status(200).json(updatedPrj) :
                                           res.status(404).json({ message: "Invalid Project ID" })
          )
          .catch(err => res.status(500).json({ error: `Database Failure on Updating Project with id ${id}` }));
});

module.exports = router;
