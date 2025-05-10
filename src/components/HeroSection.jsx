import { Hero } from '../constants';

const src = Array.isArray(Hero.img) ? Hero.img : [];
export default function HeroSection() {
  return (
    <div className="bg-white flex px-6 py-12 relative z-10">
      <div className="capitalize text-2xl font-bold">LOGO</div>
      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Content Section */}
        <div className="relative top-30 z-40 w-full h-full">
          <div className="flex flex-col items-center text-[6rem] font-bold leading-tight text-black">
            <h1>Transforming</h1>
            <h1>Digital Brands</h1>
            <h1>Since 1898</h1>
          </div>
          <div className="mt-6 flex gap-4">
            <button
              className={`bg-white text-black border-6 border-black rounded-full 
              px-8 py-4 font-semibold hover:bg-black hover:text-white
              hover:border-white
               transition`}
            >
              Get a Quote
            </button>
            <button
              className={`bg-black border-6 border-black text-white rounded-full px-8 py-4 font-semibold 
                hover:bg-white 
                hover:text-black 
                hover:border-black
                transition`}
            >
              See Our Work
            </button>
          </div>
        </div>
        {/* Images Section */}
        <div className="h-full w-full relative flex flex-col items-center justify-center">
          {src.map((item, index) => (
            <img
              alt={`Image ${index}`}
              key={index}
              src={item}
              className={`absolute 
                w-110 h-110
                nth-[1]:top-1
                nth-[1]:right-1
                nth-[2]:top-20
                nth-[2]:right-60
                nth-[3]:top-60
                nth-[3]:left-50

                `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}