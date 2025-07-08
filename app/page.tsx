'use client';

import HorizontalScrollCarousel from '@/components/HorizontalScrollCarousel';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Example = () => {
  return (
    <div className='bg-neutral-800'>
      <div className='flex h-48 items-center justify-center'>
        <span className='font-semibold uppercase text-neutral-500'>
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className='flex h-48 items-center justify-center'>
        <span className='font-semibold uppercase text-neutral-500'>
          Scroll up
        </span>
      </div>
    </div>
  );
};

export default Example;

type cardsT = {
  url: string;
  title: string;
  id: number;
};

const cards: cardsT[] = [
  {
    url: '/imgs/abstract/1.jpg',
    title: 'Title 1',
    id: 1,
  },
  {
    url: '/imgs/abstract/2.jpg',
    title: 'Title 2',
    id: 2,
  },
  {
    url: '/imgs/abstract/3.jpg',
    title: 'Title 3',
    id: 3,
  },
  {
    url: '/imgs/abstract/4.jpg',
    title: 'Title 4',
    id: 4,
  },
  {
    url: '/imgs/abstract/5.jpg',
    title: 'Title 5',
    id: 5,
  },
  {
    url: '/imgs/abstract/6.jpg',
    title: 'Title 6',
    id: 6,
  },
  {
    url: '/imgs/abstract/7.jpg',
    title: 'Title 7',
    id: 7,
  },
];
