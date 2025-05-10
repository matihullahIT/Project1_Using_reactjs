import { CardSection } from "../constants";
const cards = () => {
  return (
    <div className="relative z-0 mt-20">
      <div>
      <div
        className="grid grid-cols-2 gap-9 p-19 bg-black text-white my-30"
      >
        <h3  className="text-5xl font-bold text-white">What we offer</h3>   
        <br/>   
        {CardSection.map((item, index) => (
          <div
            key={index}
            id={item.id}
            className={`flex flex-col items-baseline justify-between
                text-black bg-white gap-9
                p-11
                 rounded-4xl`}
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
