import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App bg-bgWhite h-screen relative w-full font-[Lato] text-accentBlack'>
      <div className='relative top-1/4 -translate-y-1/4'>
        <p className='text-5xl font-medium animate-moveTextDown'>
          Lode Van Beneden
        </p>
        <div
          className={`bg-accentBlack w-1/8 p-[1.5px] my-5 relative animate-expandLine left-1/2 -translate-x-1/2 opacity-0`}
          id='movingLine'></div>
        <p className={`text-3xl animate-moveTextUp opacity-0`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
}

export default App;
