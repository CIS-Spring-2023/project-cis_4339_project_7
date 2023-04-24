const express = require('express');
const router = express.Router();

// Importing the Services model schema
const { services } = require('../models/models');

// GET all services
router.get('/', async (req, res, next) => {
  try {
    const allServices = await services.find({});
    res.json(allServices);
    console.log(allServices);
  } catch (error) {
    next(error);
  }
});


// POST a new service
router.post('/', async (req, res, next) => {
  try {
    const newService = await services.create(req.body);
    res.json(newService);
  } catch (error) {
    next(error);
  }
});

// PUT/UPDATE a service by ID
router.put('/:id', async (req, res, next) => {
  try {
    const updatedService = await services.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedService) {
      const error = new Error(`Service with ID ${req.params.id} not found`);
      error.statusCode = 404;
      throw error;
    }
    res.json(updatedService);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
