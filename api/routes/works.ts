import express from 'express';
import {Work} from '../models/Work';

const worksRouter = express.Router();

worksRouter.get('/', (req, res, next) => {
  try {
    const works = Work.find();
    return res.send(works);
  } catch (error) {
    next(error);
  }
});
