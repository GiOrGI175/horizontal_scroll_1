'use client';

import HorizontalScrollCarousel from '@/components/HorizontalScrollCarousel';

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
