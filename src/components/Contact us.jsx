import contactImage from "../assets/images/contactus.svg";

const Contact_us = () => {
  return (
    <div className="relative z-0">
      <div>
        <div className="flex flex-col px-6 py-10 bg-black text-white md:px-10">
          <h3 className="text-3xl font-bold text-white md:text-5xl">Contact us</h3>
          <br />
          <div className="flex flex-col items-center justify-between gap-6 border-4 border-white rounded-4xl m-3 h-auto md:flex-row md:gap-9">
            <div className="flex items-center justify-center w-full">
              <form
                action=""
                className="py-6 rounded-xl w-full px-4 flex flex-col justify-center items-baseline gap-y-6 text-lg capitalize md:py-10 md:px-6 md:gap-y-11 md:text-3xl"
                method="get"
              >
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  placeholder="Jhone Doe"
                  className="border border-white text-white placeholder-white/50 bg-black text-base py-2 px-3 rounded-full outline-none md:text-xl md:py-3 md:px-4"
                />
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  placeholder="Jhone Doe@gmail.com"
                  onBlur={(e) => {
                    e.target.value.includes("@") ? null : alert("Invalid Email format");
                  }}
                className="border border-white text-white placeholder-white/50 bg-black text-base py-2 px-3 rounded-full outline-none md:text-xl md:py-3 md:px-4"
                />
                <label htmlFor="Message">Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="border border-white text-white placeholder-white/50 bg-black px-3 py-2 rounded-2xl w-full outline-none md:px-4 md:py-2"
                  id="message"
                ></textarea>
                <input
                  type="submit"
                  value="Send Message"
                  className="relative rounded-full text-base w-full py-2 px-2 border-3 bg-[#FFFFFF] font-bold text-black transition-all hover:border-white hover:text-white hover:bg-black md:text-xl md:w-1/2"
                />
              </form>
            </div>
            <div className="flex items-center justify-center w-full py-6 md:py-10">
              <img
                src={contactImage}
                className="h-[240px] w-[176px] md:h-[720.14px] md:w-[528.94px]"
                alt="Contact Us"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
