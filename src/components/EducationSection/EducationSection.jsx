import React from "react";

const EducationSection = () => {
    const Techitems = [
        {
          heading: "Future Forward:Technology's Evolution Unveiled",
          image: "/assets/educationsection1.jpg",
          date: "August 19, 2024",
        },
        {
          heading: "Tech Trends:Navigating the Digital Frontier",
          image: "/assets/educationsection2.jpg",
          date: "August 18, 2024",
        },
        {
          heading: "Tech Talk:Advancements in Science and Tech",
          image: "/assets/educationsection3.jpg",
          date: "August 17, 2024",
        },
        {
          heading: "Bio Wonders:Nature's Marvels Explored",
          image: "/assets/educationsection4.jpg",
          date: "August 16, 2024",
        },
       ];
    
  return (
    <div className="w-full h-full p-10">
      <div className="flex w-[100%] h-[15%] mt-20 items-center gap-5">
        <div className="text-black text-7xl font-customOutfit">EDUCATION</div>
        <p className="text-black text-xl">latest news about Education</p>
      </div>
      <div className="w-full h-[75%] flex gap-10 pl-20 pr-20 pt-5 pb-5">
        <div className="w-[50%] h-full relative flex justify-center items-end">
          <img
            src="/assets/education.jpg"
            alt="education"
            className="w-full h-full object-cover"
          />
          <div className="absolute z-10 bg-white w-[90%] h-[22%] rounded-3xl flex justify-center items-center mb-5 font-customOutfit text-2xl ">Beyond Books : Practical Learning Adventures</div>
        </div>
        <div className="w-[50%] h-full">
        <div className="grid grid-cols-1 grid-rows-4 gap-4 w-full h-full">
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
    </div>
  );
};

export default EducationSection;
