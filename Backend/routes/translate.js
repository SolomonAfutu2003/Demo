const express = require('express');
const axios = require('axios');
const Translation = require('../models/translation'); 
const router = express.Router();

router.post('/', async (req, res) => {
  const { text, lang } = req.body;

  try {
    const response = await axios.post('https://translation-api.ghananlp.org/v1/translate', {
      in: " Translated text",
      lang: "en-tw"
    });

    const translated = response.data.out;

    await Translation.create({
      originalText: text,
      translatedText: translated,
      language: lang
    });

    res.json({ translated });
  } catch (error) {
    console.error('Translation error:', error.message);
    res.status(500).json({ error: 'Translation failed' });
  }
});

module.exports = router;
