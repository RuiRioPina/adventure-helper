import React from "react";
import Feed from "../components/Feed";

const FeedPage: React.FC = () => {
  const feedItems = [
    {
      id: "1",
      username: "hiker123",
      date: new Date(),
      title: "Mount Everest Trek",
      description:
        "I went on a trek to Mount Everest and it was an amazing experience. I brought the following equipment...",
      equipment: ["backpack", "tent", "sleeping bag", "water bottle"],
    },
    {
      id: "2",
      username: "adventurer456",
      date: new Date(),
      title: "Hiking in the Grand Canyon",
      description:
        "I went on a hiking trip to the Grand Canyon and it was an incredible adventure. Here is what I brought with me...",
      equipment: ["hiking boots", "backpack", "water filter", "hiking poles"],
    },

    // add more feed items as needed
  ];

  return (
    <div>
      {/* render other components of the page */}
      <Feed items={feedItems} />
    </div>
  );
};

export default FeedPage;
