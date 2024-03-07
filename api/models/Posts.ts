import mongoose, {Schema} from 'mongoose';
import {IPost} from '../types';

const PostSchema = new Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Post = mongoose.model('Post', PostSchema);
