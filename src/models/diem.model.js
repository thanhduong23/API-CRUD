const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const diemSchema = mongoose.Schema(
  {
    studentCode: {
      type: String,
      required: true,
      trim: true,
    },
    monhocCode: {
      type: String,
      required: true,
      trim: true,
    },
    diem: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
diemSchema.plugin(toJSON);
diemSchema.plugin(paginate);

/**
 * @typedef Diem
 */
const Diem = mongoose.model('Diem', diemSchema);

module.exports = Diem;
