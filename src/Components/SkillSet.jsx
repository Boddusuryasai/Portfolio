import React from 'react';

const SkillSet = () => {
  return (
    <>
    <h3 className='text-3xl text-center font-semibold'>My Skills</h3>
    <div className='flex flex-col items-center md:flex-row  justify-center m-6 gap-1  '>
         
        <div className='sm:w-1/2'>
        <img  className="w-[400px]" src="https://res.cloudinary.com/dybiiddob/image/upload/v1676026445/pexels-designecologist-1779487_tpignn.jpg" alt="" />
        </div>
        <div className=" w-full sm:w-1/2 flex flex-col">
      <div className="text-center mb-2">HTML & CSS</div>
      <progress className="w-full h-6 bg-black" value="80" max="100"></progress>
      <div className="text-center mt-2 mb-2">JavaScript</div>
      <progress className="w-full h-6 bg-gray-300" value="90" max="100"></progress>
      <div className="text-center mt-2 mb-2">React.js</div>
      <progress className="w-full h-6 bg-gray-300" value="85" max="100"></progress>
      <div className="text-center mt-2 mb-2">Node.js</div>
      <progress className="w-full h-6 bg-gray-300" value="75" max="100"></progress>
    </div>
  
    </div>
    </>
  );
    
};

export default SkillSet;
