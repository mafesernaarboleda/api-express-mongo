/**
 * @author Maria Fernanda Serna
 * Hotel Model
 */

const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, uppercase: true },
  price: { type: Number, required: true },
  stars: { type: Number, required: true },
  loc: { type: [Number], index: { type: '2dsphere', sparse: true } },
  phoneNumber: { type: String },
  about: { type: String, required: true },
  pictures: { type: [String] },
}, { timestamps: true });

module.exports = mongoose.model('Hotel', HotelSchema);
