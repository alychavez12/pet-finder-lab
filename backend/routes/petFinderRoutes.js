const express = require('express');
const router = express.Router();
const PetFinder = require('../models/petFinder');

router.get("/", async (req, res) => {
    try {
      res.status(200).json(await PetFinder.find({}));
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    }
  });

  router.post('/', async (req, res) => {
    try {
      res.status(201).json(await PetFinder.create(req.body));
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    }
  });


router.get('/:id', async (req, res) => {
    try {
      res.status(200).json(await PetFinder.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    } catch (error) {
      res.status(400).json({ message: "something went wrong" });
    }
  });

  module.exports = router;
