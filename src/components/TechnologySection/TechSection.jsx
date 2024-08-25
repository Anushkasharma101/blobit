import React from "react";

const TechSection = () => {
  const Techitems = [
    {
      heading: "Future Forward:Technology's Evolution Unveiled",
      image: "/assets/science.jpg",
      date: "August 19, 2024",
    },
    {
      heading: "Tech Trends:Navigating the Digital Frontier",
      image: "/assets/techsection3.jpg",
      date: "August 18, 2024",
    },
    {
      heading: "Tech Talk:Advancements in Science and Tech",
      image: "/assets/sport.jpg",
      date: "August 17, 2024",
    },
    {
      heading: "Bio Wonders:Nature's Marvels Explored",
      image: "/assets/techsection1.jpg",
      date: "August 16, 2024",
    },
    {
      heading: "Lab Diaries:Cutting-edge Scientific Discoveries",
      image: "/assets/techsection2.jpg",
      date: "August 15, 2024",
    },
    {
      heading: "Cosmic Curiosities:Exploring the Universe",
      image: "/assets/entertainment.jpg",
      date: "August 14, 2024",
    },
  ];

  return (
    <div
      className="w-full h-full p-10"
      style={{
        background: "url(/assets/technology.jpg)",
        backgroundSize: "contain",
      }}
    >
      <div className="flex w-[100%] h-[15%] mt-20 items-center gap-5">
        <div className="text-white text-7xl font-customOutfit">TECH</div>
        <p className="text-white text-xl">latest news about Technology</p>
      </div>
      <div className="w-[100%] h-[75%] flex justify-center items-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-6 p-20 w-full h-full">
          {Techitems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden h-[100%] rounded-lg p-3 flex relative group"
            >
              
              <div className="relative overflow-hidden w-full h-full rounded-lg">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 p-2 cursor-pointer">
                <h2 className="text-xl font-customKanitRegular text-white">
                  {item.heading}
                </h2>
                <p className="text-gray-200 text-sm">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSection;
