import React from 'react';

const Prize = () => {
  return (
// <<<<<<< HEAD

    <div className='w-screen overflow-x-hidden' id='prize'>
      <h1 className=" text-3xl self-center lg:text-4xl font-bold leading-9 text-[#daa520] pb-1 text-center relative mb-4">
          Prize
        </h1>

      <div className='flex flex-wrap gap-40 lg:gap-28 md:gap-4 justify-center lg:h-[85vh] pb-[150px] max-w-fit mx-auto '>
        <div
          className= "font-bold p-4 top-10 text-right text-gray-800 bg-cover bg-center rounded-lg shadow-md transition hover:scale-110 duration-300 hover:shadow-xl relative card w-[200px] h-[300px]  "

        >
          <div className='font-bold p-4 text-right text-gray-800 bg-cover shadow-md transition duration-300 hover:shadow-xl relative card bg-[url(/silver.jpeg)] w-[200px] h-[300px] bg-top rounded-2xl '>
          </div>

          <div className="content relative left-4  rounded-2xl h-[70px] text-white text-xl text-center bg-gradient-to-r from-[#FFF1A5] via-[#C87D4C] to-[#533636]  ">
            <h3>🏆2nd Prize🏆<br />₹15000</h3>
          </div>
        </div>
        <div
          className="font-bold p-4 text-right text-gray-800 bg-cover bg-center rounded-lg shadow-md transition hover:scale-110 duration-300 hover:shadow-xl relative card w-[300px] h-[400px]   "


        >
          <div className='font-bold p-4 text-right text-gray-800 bg-cover shadow-md transition duration-300 hover:shadow-xl relative card bg-[url(/gold.jpeg)] w-[300px] h-[400px] bg-top rounded-2xl '>

          </div>
          <div className="content bg-gradient-to-r from-[#FFF1A5] via-[#C87D4C] to-[#533636] relative left-4  rounded-2xl h-[100px] text-white text-center text-[2rem] " >
            <h2>🏆First Prize🏆<br />₹21000</h2>
          </div>
        </div>
        <div
          className="font-bold p-4 top-10 text-right text-gray-800 bg-cover bg-center rounded-lg shadow-md transition hover:scale-110 duration-300 hover:shadow-xl relative card w-[200px] h-[300px]  ">

          <div className='font-bold p-4 text-right text-gray-800 bg-cover shadow-md transition duration-300 hover:shadow-xl relative card bg-[url(/bronze.jpeg)] w-[200px] h-[300px] bg-top rounded-2xl '>

        </div>
          <div className="content relative left-4  rounded-2xl h-[70px] text-white text-xl text-center bg-gradient-to-r from-[#FFF1A5] via-[#C87D4C] to-[#533636] ">
            <h3>🏆3rd Prize🏆<br />₹10000</h3>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Prize;
