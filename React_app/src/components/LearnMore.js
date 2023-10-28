import React, { useState } from 'react';
import "../styles/LearnMore.css";

function LearnMore() {
  // State to manage accordion item visibility
  const [expandedItem, setExpandedItem] = useState(null);

  // Function to toggle the accordion item
  const toggleItem = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  // Sample data for the "Why Choose" section
  const whyChooseData = {
    title: "Why Choose 'Smarter Farming with Field Zoning'?",
    content: [
      "Increased Yields: Unlock the full potential of your land and maximize crop productivity with targeted and optimized practices for each zone.",
      "Resource Efficiency: Say goodbye to wasted resources and excessive costs as our precision techniques help you make the most of every drop of water and every ounce of fertilizer.",
      "Sustainable Farming: Join the movement towards environmental stewardship, as field zoning promotes eco-friendly practices that conserve natural resources and enhance soil health.",
      "Expert Support: Our team of agronomists and agricultural experts will guide you through the implementation process, ensuring a seamless transition and ongoing support.",
    ],
  };

  return (
    <div className="learnMore">
      <h1>What is Field Zoning?</h1>
      <p>
        Field zoning is the innovative approach of dividing your farmland into specific zones based on a deep understanding of your soil's characteristics, topography, and historical crop performance. By customizing crop management for each zone, you can optimize resource usage, boost yields, and ensure sustainable agricultural practices.
      </p>

      <div className="whyChooseBox">
        <h2
          className={`whyChooseTitle ${expandedItem === "all" ? "expanded" : ""}`}
          onClick={() => toggleItem("all")}
        >
          {whyChooseData.title}
        </h2>
        <div className={`whyChooseContent ${expandedItem === "all" ? "expanded" : ""}`}>
          <ul>
            {whyChooseData.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="joinMovementBox">
        <h2>Join the Movement</h2>
        <p>
          Be part of the agricultural revolution and embrace "Smarter Farming with Field Zoning." Whether you're a seasoned farmer or just starting, our innovative solutions will empower you to achieve extraordinary results, leaving a positive impact on your farm's future and the world.
        </p>
      </div>
    </div>
  );
}

export default LearnMore;