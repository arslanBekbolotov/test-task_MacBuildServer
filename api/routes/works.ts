import express from 'express';
import {Work} from '../models/Work';
import postsRouter from './posts';

const worksRouter = express.Router();

worksRouter.get('/', async (req, res, next) => {
  try {
    const works = await Work.find();
    return res.send(works);
  } catch (error) {
    next(error);
  }
});

export default worksRouter;
