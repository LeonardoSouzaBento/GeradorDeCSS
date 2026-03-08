import React from 'react';

export const DecorativeBackGround = () => {
  return (
    <div className="fixed min-h-screen h-full w-full -z-1">
      {/* dot pattern */}
      {/* <div className='h-full min-h-screen w-full bg-[url("../assets/dot-pattern.png")] 
      bg-size-[350px_175px] bg-repeat relative opacity-7 -z-1' /> */}
      {/* gradient top */}
      <div className="w-full h-44 opacity-9 z-2 flex items-end fixed top-0 left-0 
      bg-[url('../assets/gradient.png')] bg-size-[100%_100%]" />
    </div>
  );
};