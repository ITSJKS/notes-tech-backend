const express = require('express')
const router = express.Router()
const path = require('path')

// using regex for matching index path or root path
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router