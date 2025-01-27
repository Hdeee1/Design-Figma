import tick from "../image/tick-circle.png";

const Bundle = () => {
  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="flex p-10 border-2 border-[#E0E0E0] w-[1280px] rounded-[32px] justify-between">
        <div className=" ">
          <div className="">
            <h2 className="text-5xl font-extrabold mb-[24px] text-[#525252]">
              The best investment to <br />
              get more customers.
            </h2>
            <h5 className="mb-[84px] text-[#8F8F8F] font-bold text-2xl">
              7 day money back guarantee
            </h5>
          </div>

          <div className=" mb-[40px]">
            <h4 className="text-[#525252] text-[2rem] font-bold mb-1">
              Payment in automatic verification by
            </h4>
            <img src="" alt="moota logo" />
          </div>

          <div className="font-extrabold flex gap-2.5">
            <button className="px-10 py-2 text-[#8F8F8F] rounded-[16px] px-5 border-4 border-[#E0E0E0] hover:text-[#35C6A0] transition-colors">
              Change USD ($)
            </button>
            <button className="bg-[#35C6A0] hover:bg-[#30ad8c] px-10 py-3 transition-colors text-white rounded-[16px] px-5">
              Buy Now
            </button>
          </div>
        </div>

        <div className="border-l-2 border-[#E0E0E0] w-[552px]">
          <div className="border-b-2 border-[#E0E0E0] mb-[40px]">
            <h3 className="text-[40px] ml-[40px] text-[#8F8F8F]">
              Rp{" "}
              <span className="text-[104px] leading-none font-bold font-blinker text-[#35C6A0]">
                197
              </span>
              000
            </h3>
          </div>

          <div className="ml-[40px]">
            <ul className="flex flex-col gap-5 text-[#8F8F8F] font-bold text-[2rem]">
              <li className="flex items-center gap-2">
                <div className="flex w-[40px] h-[40px]">
                  <img src={tick} alt="" />
                </div>
                Unlimited Message
              </li>
              <li className="flex items-center gap-2">
                <div className="flex w-[40px] h-[40px]">
                  <img src={tick} alt="" />
                </div>
                Unlimited Domains
              </li>
              <li className="flex items-center gap-2">
                <div className="flex w-[40px] h-[40px]">
                  <img src={tick} alt="" />
                </div>
                User Private Number
              </li>
              <li className="flex items-center gap-2">
                <div className="flex w-[40px] h-[40px]">
                  <img src={tick} alt="" />
                </div>
                Full API Documentation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bundle;
