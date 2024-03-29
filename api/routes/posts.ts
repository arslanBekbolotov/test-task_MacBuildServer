import express from 'express';
import {Post} from '../models/Posts';

const postsRouter = express.Router();

postsRouter.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find();
    return res.send(posts);
  } catch (error) {
    next(error);
  }
});

export default postsRouter;
