import express from 'express';
import {User} from '../models/User';
import {Error} from 'mongoose';

const usersRouter = express.Router();

usersRouter.post('/', async (req, res, next) => {
  try {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });

    user.generateToken();

    await user.save();
    return res.send({user, message: 'Success'});
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      return res.status(400).send(error);
    }

    next(error);
  }
});

usersRouter.post('/sessions', async (req, res, next) => {
  try {
    const user = await User.findOne({email: req.body.email});

    if (!user) {
      return res.status(400).send({error: 'Wrong password or email!!!'});
    }

    const isMatch = await user.checkPassword(req.body.password);

    if (!isMatch) {
      return res.status(400).send({error: 'Wrong password or email!'});
    }

    user.generateToken();
    await user.save();

    res.send({
      message: 'Username and password correct!',
      user,
    });
  } catch (e) {
    next(e);
  }
});

export default usersRouter;
