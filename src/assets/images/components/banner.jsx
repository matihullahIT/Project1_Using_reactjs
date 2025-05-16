import React from 'react';
import { Hero } from '../../../constants';

const banner = () => {
    const img = Array.isArray(Hero.img) ?Hero.img
    : [Hero.img]; // Ensure img is an array
    return (
        <div className="h-[40rem] w-full bg-gray-100">
            <div className=" h-full w-full flex items-center justify-between border-2">
                {/* 2nd div */}
                <div className="flex flex-col items-center font-bold">
                    <p className="text-[8rem] font-bold">{Hero.title}</p>
                    <div className=" w-full flex justify-between gap-4 text-3xl">
                        <button className='border-5 border-black bg-white rounded-4xl py-4 px-6 transition-all duration-100 ease-linear hover:bg-black hover:text-white   '>{Hero.btn}</button>
                        <button className='border-4 border-white bg-black text-white rounded-4xl py-4 px-6 transition-all hover:bg-white  hover:text-black   hover:border-black '>{Hero.ctabtn}</button>
                    </div>
                </div>
                <div className='p-60 border-2 border-black'>
                    {img.map((item, index) => (
                        <div key={index} className={`scale-500 flex flex-col 
                        nth-[2]:bg-gray-600
                        nth-[2]:-translate-x-30
                        translate-y-10
                        `}>
                            <img src={item} className="border-2" alt={`Image ${index}`} />
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default banner;