import logo from "../image/logo.png";

const Navbar = () => {
  return (
    <div className="px-20 py-10 flex justify-between items-center w-full">
      <div className="hover:cursor-pointer">
        <img src={logo} alt="" />
      </div>

      <div className="font-semibold text-[#525252]">
        <ul className="hvr flex gap-10">
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>API Doc</li>
          </a>
          <a href="">
            <li>Price</li>
          </a>
          <a href="">
            <li>FAQ</li>
          </a>
          <a href="">
            <li>Integration</li>
          </a>
          <a href="">
            <li>Blog</li>
          </a>
        </ul>
      </div>

      <div className="flex gap-5">
        <button className="bg-[#9B5C8F] hover:bg-[#85487a] p-3 transition-colors text-white rounded-[16px] px-5">
          Sign In
        </button>
        <button className="bg-[#35C6A0] hover:bg-[#30ad8c] p-3 transition-colors text-white rounded-[16px] px-5">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
