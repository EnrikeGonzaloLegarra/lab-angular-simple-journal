/*jshint esversion:6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const journalSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: new Date()
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }

});

const JournalEntries = mongoose.model('JournalEntries', journalSchema);
module.exports = JournalEntries;
