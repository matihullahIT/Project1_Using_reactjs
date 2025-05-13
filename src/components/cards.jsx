import { CardSection } from "../constants";
const cards = () => {
  return (
    <div className="relative z-0 my-10">
      <div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-15 gap-x-5 sm:gap-x-7 p-5 sm:p-10 bg-black text-white"
      >
        <h3  className="text-5xl font-bold text-white">What we offer</h3>   
        <br/>   
        {CardSection.map((item, index) => (
          <div
            key={index}
            id={item.id}
            className={`flex flex-col items-start justify-between
                text-black bg-white gap-6 sm:gap-9
                p-6 sm:p-11
                rounded-2xl sm:rounded-4xl`}
          >
            <h2 style={{ color: item.color || "black" }} className="font-bold text-7xl">
              {item.title}
            </h2>
            <p className="text-xl">{item.description}</p>
            <button
              className="border-2 border-black px-6 
                    py-2 rounded-full text-xl
                    transition-all hover:border-white hover:text-white  hover:bg-black
                    "
            >
              {item.btn}
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default cards;
