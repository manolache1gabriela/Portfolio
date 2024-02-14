import React, { useEffect, useState } from 'react';
import SwiperCards from './SwiperCards';
import useWindowSize from '../hooks/useWindowSize';
export default function Projects() {
  const giftyText = (
    <div>
      An app, made in collaboration with a friend, where you can make a
      wishlist, from which your friends and family can claim a present to give
      you, or they can create their own wishlist.
      <br />
      <div className='text-secondary mt-2'>
        Demo account: <br />
        <div className='flex gap-5'>
          <span>email: test12@test.com</span>
          <span>password: test123</span>{' '}
        </div>
      </div>
    </div>
  );
  const projects = [
    {
      name: 'Audiophile',
      finished: 'September 2023',
      skills: ['React', 'SCSS'],
      description:
        'My first programming project: an e-Commerce application, named Audiophile, where audio items can be purchased.',
      linkRepo: 'https://github.com/manolache1gabriela/Audiophile',
      linkProject: 'https://audiophile-19.netlify.app',
      video: './assets/audiophile.mp4',
    },
    {
      name: 'Paws and Guess',
      finished: 'October 2023',
      skills: ['React', 'Tailwind CSS'],
      description:
        'A dog breed guessing game, with the scope of learning how to use an API.',
      linkRepo: 'https://github.com/manolache1gabriela/Dog-Guesser',
      linkProject: 'https://dog-guesser.netlify.app',
      video: './assets/paws.mp4',
    },
    {
      name: 'Gifty',
      finished: 'In progress',
      skills: ['React', 'Tailwind CSS', 'TypeScript'],
      description: giftyText,
      linkRepo: 'https://github.com/manolache1gabriela/Gifty',
      linkProject: 'https://gifty-app.netlify.app',
      video: './assets/coming_soon.mp4',
    },
    {
      name: 'Journal App',
      finished: 'In progress',
      skills: ['Vue', 'Bootstrap', 'NodeJs', 'Express', 'MongoDB'],
      description:
        'A journal app, where you can rate your day, track your day and your health throughout the month.',
      linkRepo: 'https://github.com/manolache1gabriela/Journal',
      linkProject: 'when finished',
      video: './assets/coming_soon.mp4',
    },
  ];

  const size = useWindowSize();

  const [cardsNumber, setCardsNumber] = useState(0);
  useEffect(() => {
    size.width < 1024 ? setCardsNumber(1) : setCardsNumber(2);
  }, [size.width]);

  return (
    <div className='flex h-full items-center flex-col gap-8 justify-center py-16'>
      <div className='text-white font-poppins flex items-center flex-col gap-8 w-[90%]'>
        <h3 className='w-full font-poppins text-center lg:text-left text-2xl lg:text-3xl font-bold text-tertiary'>
          Portfolio
        </h3>
        <p
          id='projects'
          className='font-poppins text-secondary text-center w-full lg:text-left lg:text-4xl text-3xl'>
          Each task is a canvas of individual innovation &#127912;
        </p>
      </div>
      <div className='w-[90%] h-full flex flex-col lg:flex-row gap-8 font-poppins flex-wrap'>
        <SwiperCards projects={projects} cardsNumber={cardsNumber} />
      </div>
    </div>
  );
}
