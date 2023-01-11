import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App bg-bgWhite h-screen relative w-full font-[Lato] text-accentBlack'>
      <div className='relative top-1/5'>
        <p className='font-medium animate-moveTextDown text-2xl lg:text-5xl '>
          Lode Van Beneden
        </p>
        <div
          className={`bg-accentBlack relative animate-expandLine left-1/2 -translate-x-1/2 opacity-0 my-3 p-[1.5px] lg:my-5 `}
          id='movingLine'></div>
        <p className={`animate-moveTextUp mx-2 opacity-0 text-lg lg:text-2xl `}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
}

export default App;
