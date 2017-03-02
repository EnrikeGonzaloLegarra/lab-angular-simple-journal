/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const JournalEntry = require('../../models/journal-entry');

router.get('/journal-entries', function(req, res, next) {
  JournalEntry.find().lean().exec(function(err, journals) {
    if (err) return next(err);
    return res.send(JSON.stringify(journals));
  });
});

router.get('/journal-entries/:id', function(req, res, next) {
  const entryId = req.params.id;
  JournalEntry.findById(entryId, (err, entry) => {
    if (err) return next(err);
    return res.send(JSON.stringify(entry));
  });
});


module.exports = router;
