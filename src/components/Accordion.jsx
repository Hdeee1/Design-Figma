import arrow from "../image/arrow.png";

const Accordion = ({ content }) => {
  return (
    <div>
      <div>
        <div className="border-2 border-[#E0E0E0] rounded-3xl py-6 px-[40px] flex justify-between items-center ">
          <h3 className="text-2xl text-[#8F8F8F] font-bold">{content}</h3>

          <div className="">
            <img src={arrow} alt="" className="hover: cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
