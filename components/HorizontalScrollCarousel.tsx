import { cards } from '@/common/cards';
import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import Card from './Card';

export default function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className='relative h-[300vh] bg-neutral-900'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div style={{ x }} className='flex gap-4'>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}
