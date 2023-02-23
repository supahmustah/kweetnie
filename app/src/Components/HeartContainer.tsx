import { create } from 'domain';
import { createElement } from 'react';
import { BsHeartFill, BsHeartHalf, BsHeart } from 'react-icons/bs';

export default function HeartContainer(props: any) {
  let hearts: any[] = [];

  const makeHearts = () => {
    const enjoyment = props.enjoyment;
    const splitEnjoyment = enjoyment.toString().split('.');
    for (let i: number = 0; i < 5; i++) {
      if (i < splitEnjoyment[0]) {
        hearts.push(BsHeartFill);
      } else if (splitEnjoyment[1] == 5 && i == splitEnjoyment[0]) {
        hearts.push(BsHeartHalf);
      } else {
        hearts.push(BsHeart);
      }
    }
  };

  const heartContainer = makeHearts();

  return (
    <div className='flex flex-row justify-center space-x-[1px] mb-2 text-gray-400 text-sm'>
      {hearts.map((heart) => (
        <div>
          {createElement(heart, { className: 'h-4 w-4 text-pink-500' })}
        </div>
      ))}
    </div>
  );
}
