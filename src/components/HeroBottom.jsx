import SocialNetworking from "../image/SocialNetworking.png";

const HeroBottom = () => {
  return (
    <div>
      <div className="flex justify-around items-center p-20 w-full h-dvh">
        <div className="image-hero w-6/12">
          <img className="w-full cover" src={SocialNetworking} alt="" />
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-[3rem] font-extrabold text-[#525252]">
              Now your CS is free from <br /> tiring customer follow <br /> up
              routine!
            </h2>
          </div>

          <div>
            <button className="bg-[#35C6A0] hover:bg-[#30ad8c] px-10 py-3 transition-colors text-white rounded-[16px] px-5 font-extrabold">
              Use Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
