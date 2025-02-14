import React, { useState } from "react";

const DinoEasterEgg = () => {
  const [showEasterEggMessage, setShowEasterEggMessage] = useState(false);

  // Function to handle the click event
  const handleDinoClick = () => {
    setShowEasterEggMessage(true);
    const popup = window.open(
      "https://chromedino.com/",
      "DinoGame",
      "width=800,height=500"
    );
    if (!popup) {
      alert("Please allow popups for this site to play the game!");
    }
  };

  return (
    <div className="text-center mt-2">
      <img
        src="dino.png"
        alt="Dino"
        onClick={handleDinoClick}
        className="invert cursor-help w-8 md:w-16 mx-auto"
      />
      {showEasterEggMessage && (
        <p className="text-green-600 font-medium text-sm">
          🎉 You Spotted the Dino! Enjoy the Dino game!
        </p>
      )}
    </div>
  );
};

export default DinoEasterEgg;
