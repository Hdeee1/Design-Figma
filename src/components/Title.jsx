/* eslint-disable react/prop-types */
const Title = ({ props }) => {
  return (
    <div>
      <h2 className="text-[#525252] text-4xl text-center font-extrabold ">
        {props.title}
      </h2>
    </div>
  );
};

export default Title;
