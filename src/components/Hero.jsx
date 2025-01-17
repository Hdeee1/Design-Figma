import VisionaryHero from "../image/VisionaryHero.png";

const Hero = () => {
  return (
    <div className="flex justify-between p-20 items-center text-[#525252] w-full ">
      <div className="w-3/6">
        <div>
          <div className="text-5xl font-black mb-8">
            <h1>
              Automatic notification <br /> and reminder{" "}
              <span className="text-[#9B5C8F]">Messages</span> <br /> via{" "}
              <span className="text-[#35C6A0]">Whatsapp</span>
            </h1>
          </div>
          <div className="mb-8 ">
            <h1>
              Just connect your web.whatsapp to the woowa server, then you{" "}
              <br /> will be on 24 hours without having to open the laptop
            </h1>
          </div>
        </div>

        <div className="flex gap-5 font-extrabold">
          <button className="bg-[#35C6A0] hover:bg-[#30ad8c] px-10 py-3 transition-colors text-white rounded-[16px] px-5">
            About
          </button>
          <button className="hover:bg-[#c3c5c5a9] px-10 py-3 transition-colors  rounded-[16px] px-5">
            Contact
          </button>
        </div>
      </div>
      <div className="right">
        <div>
          <img src={VisionaryHero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
