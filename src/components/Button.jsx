import { useState } from "react";

const ButtonHoverEffect = () => {
  const [hoverButton, setHoverButton] = useState(null);

  return (
    <div>
      <button
        onMouseEnter={() => setHoverButton("about")}
        onMouseLeave={() => setHoverButton(null)}
        className={`px-10 py-3 rounded-[16px] transition-colors text-white ${
          hoverButton === "about"
            ? "bg-[#35C6A0] hover:bg-[#30ad8c]"
            : "bg-gray-400"
        }`}
      >
        About
      </button>

      <button
        onMouseEnter={() => setHoverButton("contact")}
        onMouseLeave={() => setHoverButton(null)}
        className={`px-10 py-3 rounded-[16px] transition-colors text-white ${
          hoverButton === "contact"
            ? "bg-[#35C6A0] hover:bg-[#30ad8c]"
            : "bg-gray-400"
        }`}
      >
        Contact
      </button>
    </div>
  );
};

export default ButtonHoverEffect;
