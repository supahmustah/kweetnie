import { create } from 'domain';
import { createElement } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export default function StarContainer(props: any) {
  let stars: any[] = [];

  const makeStars = () => {
    const enjoyment = props.enjoyment;
    const splitEnjoyment = enjoyment.toString().split('.');
    for (let i: number = 0; i < 5; i++) {
      if (i < splitEnjoyment[0]) {
        stars.push(BsStarFill);
      } else if (splitEnjoyment[1] === 5 && i === splitEnjoyment[0]) {
        stars.push(BsStarHalf);
      } else {
        stars.push(BsStar);
      }
    }
  };

  makeStars();

  return (
    <div className='flex flex-row justify-center space-x-[1px] mb-2 text-gray-400 text-sm'>
      {stars.map((star) => (
        <div>{createElement(star, { className: 'h-4 w-4 text-yellow-500' })}</div>
      ))}
    </div>
  );
}
