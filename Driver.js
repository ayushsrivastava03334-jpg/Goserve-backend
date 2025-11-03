import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  vehicle: { type: String },
  status: { type: String, enum: ['available','busy','offline'], default: 'available' },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0,0] } // [lng, lat]
  },
  earnings: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

driverSchema.index({ location: '2dsphere' });

export default mongoose.model('Driver', driverSchema);
