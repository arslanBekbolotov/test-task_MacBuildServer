import mongoose, {Schema} from 'mongoose';
import {IWork} from '../types';

const WorksSchema = new Schema<IWork>({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  publicationYear: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Work = mongoose.model('Work', WorksSchema);
