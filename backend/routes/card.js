const express = require('express')
const router = express.Router()
const Card = require('../models/Card.js')
const { v4: uuidv4 } = require('uuid')

// Create a card
router.post('/cards', async (req, res) => {
  const { title, description } = req.body

  try {
    const newCard = new Card({
      id: uuidv4(),
      title,
      description,
    })

    await newCard.save()
    res.status(201).json(newCard)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error creating card', error: error.message })
  }
})

// Get all cards
router.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find({})
    res.status(200).json(cards)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching cards', error: error.message })
  }
})

// Get a specific card
router.get('/cards/:title', async (req, res) => {
  const { title } = req.params

  try {
    const card = await Card.findOne({ title: title })

    if (!card) {
      return res.status(404).json({ message: 'Card not found' })
    }

    res.status(200).json(card)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching card', error: error.message })
  }
})

module.exports = router
