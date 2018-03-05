/**
 * @author Maria Fernanda Serna
 * Hotel Model
 */

const mongoose = require('mongoose');

const PictureSchema = new mongoose.Schema({
  url: { type: String, required: true },
}, { _id: false });

const LocalitationSchema = new mongoose.Schema({
  lat: { type: Number, required: true },
  log: { type: Number, required: true },
}, { _id: false });

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, uppercase: true },
  price: { type: Number, required: true },
  stars: { type: Number, required: true },
  loc: { type: { LocalitationSchema }, index: { type: '2dsphere', sparse: true } },
  phoneNumber: { type: String },
  about: { type: String, required: true },
  pictures: [PictureSchema],
}, { timestamps: true });

module.exports = mongoose.model('Hotel', HotelSchema);
