import mongoose from 'mongoose';
import config from './config';
import {User} from './models/User';
import {randomUUID} from 'crypto';
import {Work} from './models/Work';
import {Post} from './models/Posts';

const run = async () => {
  await mongoose.connect(config.db || '');
  const db = mongoose.connection;

  try {
    await db.dropCollection('users');
    await db.dropCollection('cocktails');
  } catch (error) {
    console.log('Collection were not present, skipping drop...');
  }

  await User.create(
    {
      email: 'user@gmail.com',
      password: '123',
      displayName: 'John Doe',
      token: randomUUID(),
      role: 'user',
    },
    {
      email: 'admin@mail.com',
      password: '123',
      displayName: 'Will Smith',
      token: randomUUID(),
      role: 'admin',
    },
  );

  await Post.create(
    {
      title: 'Making a design system from scratch',
      topic: 'Design',
      publicationDate: '12 Feb 2020',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      title: 'Creating pixel perfect icons in Figma',
      topic: 'Design, Pattern',
      publicationDate: '12 Feb 2020',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  );

  await Work.create(
    {
      title: 'Designing Dashboards',
      image: 'fixtures/Rectangle30.jpg',
      publicationYear: '2020',
      type: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      title: 'Vibrant Portraits of 2020',
      image: 'fixtures/Rectangle32.jpg',
      publicationYear: '2018',
      type: 'Illustration',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      title: '36 Days of Malayalam type',
      image: 'fixtures/Rectangle34.jpg',
      publicationYear: '2018',
      type: 'Typography',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  );

  await db.close();
};

run().catch((e) => console.log(e));
