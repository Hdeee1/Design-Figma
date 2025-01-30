import logo from "../image/logo.png";
import map from "../image/map.png";

const Footer = () => {
  return (
    <div className="p-[80px] flex justify-between">
      <div className="w-[616px]">
        <div className="mb-[40px]">
          <div className="flex items-center mb-[24px]">
            <div className="">
              <img src={logo} alt="" />
            </div>
            <h5 className="text-[2rem] font-bold text-[#35C6A0]">Woo-Wa.com</h5>
          </div>

          <p className="font-bold text-[1.25rem] text-[#8F8F8F] ">
            Woowa is a Serverless WhatsApp API that integrates with multiple
            platforms to send automated Instant Messaging messages.
          </p>
        </div>

        <div className="flex items-center">
          <div className="">
            <img src={map} alt="" />
          </div>
          <p className="text-[#8F8F8F] font-bold text-[1.25rem] ">
            Banguntapan, Bantul Regency, Special Region of Yogyakarta
          </p>
        </div>
      </div>

      <div className="footer flex justify-between w-[520px] ">
        <div className="">
          <h5 className="font-bold text-2xl text-[#525252] mb-[24px]">Menu</h5>
          <ul className="text-[#8F8F8F] flex flex-col gap-[18px]">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">API D</a>oc
            </li>
            <li>
              <a href="">Price</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Integration</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h5 className="font-bold text-2xl text-[#525252] mb-[24px]">
            Information
          </h5>
          <ul className="text-[#8F8F8F] flex flex-col gap-[18px]">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Sign Up</a>
            </li>
            <li>
              <a href="">Sign In</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Community</a>
            </li>
            <li>
              <a href="">Partnership</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h5 className="font-bold text-2xl text-[#525252] mb-[24px]">
            Social Media
          </h5>
          <ul className="text-[#8F8F8F] flex flex-col gap-[18px]">
            <li>
              <a href="">WhatsApp</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Telegram</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">YouTube</a>
            </li>
            <li>
              <a href="">Linkeidn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
