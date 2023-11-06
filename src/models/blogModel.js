const mongoose = require("mongoose");
const crypto = require("../utils/crypto")
const Schema = mongoose.Schema;

const _nameModel = "blogs";

const userSchema = new Schema({
  id: {
    type: Number
  },
  title: {
    type: String
  },
  author: {
    type: String
  },
  content: {
    type: String
  },
  creation_date: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model(_nameModel, userSchema);