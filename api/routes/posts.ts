import express from 'express';
import {Post} from '../models/Posts';

const postsRouter = express.Router();

postsRouter.get('/', (req, res, next) => {
  try {
    const posts = Post.find();
    return res.send(posts);
  } catch (error) {
    next(error);
  }
});
