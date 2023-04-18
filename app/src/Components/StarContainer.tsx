import { createElement } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export default function StarContainer(props: any) {
  let stars: any[] = [];

  const makeStars = () => {
    const knowledge = props.knowledge;
    const splitKnowledge = knowledge.toString().split('.');
    console.log(splitKnowledge);
    for (let i: number = 0; i < 5; i++) {
      if (i < splitKnowledge[0]) {
        stars.push(BsStarFill);
      } else if (i == splitKnowledge[0] && splitKnowledge[1] == 5) {
        stars.push(BsStarHalf);
      } else {
        stars.push(BsStar);
      }
    }
  };

  makeStars();

  return (
    <div className='flex flex-row justify-center space-x-[1px] mb-2 text-gray-400 text-sm'>
      {stars.map((star, index) => (
        <div key={index}>
          {createElement(star, { className: 'h-4 w-4 text-yellow-500' })}
        </div>
      {stars.map((star, index) => (
        <div key={index}>{createElement(star, { className: 'h-4 w-4 text-yellow-500' })}</div>
      ))}
    </div>
  );
}
