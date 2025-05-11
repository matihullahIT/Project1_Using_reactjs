import { Testimonialsection } from "../constants";
// Removed unused variable 'imgs' to avoid warnings
const Testimonials = () => {
  return (
    <div className="w-sreen relative z-0 mt-20">
      <div>
        <div className="w-sreen grid grid-cols-2 gap-9 p-19 my-30">
          <h3 className="text-5xl font-bold text-black">Our Work</h3>   
          <br/>
          <div className="my-30  border-3 border-pink-500">
            <div className=" grid grid-cols-2
            border-3 border-blue-500 gap-4">
                {Testimonialsection.map((item, index) => (
                    <div
                        key={index}
                        className={` flex flex-col ${index === 2 ? 'col-span-2' : ''}`}
                        id={item.id}
                    >
                        <img src={item.img} className={``} alt={`Image ${item.img}`} />
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
