import { Testimonialsection } from "../constants";
// Removed unused variable 'imgs' to avoid warnings
const Testimonials = () => {
  return (
    <div className="   z-0 my-10">
      <div className=" flex flex-col items-center justify-center">
        <div className=" w-full grid grid-cols-2 gap-9 p-15  ">
          <h3 className="text-5xl font-bold text-black">Our Work</h3>   
          <br/>
          <div className="relative w-6xl left-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 self-baseline gap-x-4 gap-y-9">
    {Testimonialsection.map((item, index) => (
      <div
        key={index}
        className={`flex flex-col sm:flex-row md:flex-row lg:flex-col ${index === 2 ? 'lg:col-span-2 md:col-span-2 sm:col-span-0' : ''}`}
        id={item.id}
      >
        <img
          src={item.img}
          className="w-screen h-screen object-contain"
          alt={`Image ${item.img}`}
        />
        <button
              className={`relative rounded-full text-xl
              w-1/3 py-2 px-2
                    bg-[#FFFFFF] font-bold
                    transition-all 
                    hover:text-white  hover:bg-black
                    ${index===2?"left-5 bottom-25":' left-10 bottom-15  '}
                    `}>
              {item.btn}
            </button>
      </div>
    ))}
  </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
