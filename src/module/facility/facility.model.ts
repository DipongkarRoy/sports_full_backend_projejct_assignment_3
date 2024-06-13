import { Schema, model } from 'mongoose';
import { TFacility } from './facility.interface';

const FacilitySchema = new Schema<TFacility>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  pricePerHour: {
    type: Number,
  },
  location: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default:false
    
  },
});

export const facilituModel = model<TFacility>('facility', FacilitySchema);
