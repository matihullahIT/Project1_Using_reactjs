import {footersection} from "../constants"
const text=footersection.text
const footer = () => {
  return (
    <div className="flex items-center justify-between my-7 px-9 w-full h-full">
                <div  className="w-full flex flex-col lg:flex-row md:flex-row sm:flex-col sm:gap-y-10 justify-between">
                <h4 className="text-7xl">{footersection.logo}</h4>
                <div className="grid grid-cols-3 grid-rows-2">
                    {text.map((item)=>(<span>{item}</span>))}
                </div>
                <button onClick={() => {
                    let currentPosition = window.scrollY;
                    const scrollToTop = () => {
                        if (currentPosition > 0) {
                            window.scrollTo(0, currentPosition);
                            currentPosition -= 80; // Adjust the speed by changing this value
                            requestAnimationFrame(scrollToTop);
                            window.scroll({behavior:"smooth"})
                        }
                    };
                    scrollToTop();
                }}>
            <div className="rounded-full border-2 p-8  border-black"> 
                    Top
            </div>
                    </button>
            </div>
    </div>
  )
}

export default footer
