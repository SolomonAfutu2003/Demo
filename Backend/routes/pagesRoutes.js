const express = require('express');
const Page = require('../models/Page'); 
const router = express.Router();

// GET /api/pages/:title
router.get('/:title', async (req, res) => {
   const pageTitle = req.params.title;
    console.log(`🔍 Request received for page: ${pageTitle}`);
    try{
  
    const page = await Page.findOne({ title: req.params.title });
    if (!page) {
      return res.status(404).json({ error: 'Page not found' });
    }
    res.json(page);
  } catch (err) {
    console.error('Error fetching page:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

