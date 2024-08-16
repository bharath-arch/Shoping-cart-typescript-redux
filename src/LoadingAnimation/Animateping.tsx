import React from "react";
import "./animate.css"; // Ensure you import your CSS file if needed

const AnimatePing: React.FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex gap-2">
        <img
          className="animate-bounce w-5 h-5"
          src="https://cdn-icons-png.flaticon.com/512/587/587393.png"
          alt="Animated Ball"
        />
        <img
          className="animate-bounce w-5 h-5 "
          src="https://cdn-icons-png.flaticon.com/512/587/587393.png"
          alt="Animated Ball"
        />
        <img
          className="animate-bounce w-5 h-5 "
          src="https://cdn-icons-png.flaticon.com/512/587/587393.png"
          alt="Animated Ball"
        />
        <img
          className="animate-bounce w-5 h-5 "
          src="https://cdn-icons-png.flaticon.com/512/587/587393.png"
          alt="Animated Ball"
        />
      </div>
    </div>
  );
};

export default AnimatePing;
