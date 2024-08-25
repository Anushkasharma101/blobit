import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="w-full h-[60%] bg-customPurple flex flex-col">
      <div className="w-[100%] h-[60%] flex pl-10 pr-10 pt-10 gap-[5%] mt-3">
        <div className="contact-us glass-background w-[30%] h-[100%] p-5 flex flex-col">
          <div className="w-full h-[20%] font-customOutfit text-3xl underline">
            CONTACT-US
          </div>
           <div className="w-full h-[20%] flex gap-4 items-center mt-6">
            <div className="w-[20%] h-[100%] bg-black rounded-xl flex justify-center items-center">
              <img src="/assets/email.png" alt="email" />
            </div>
            <p className="font-semibold">blogmaster.anushka11@gmail.com</p>
          </div>

          <div className="w-full h-[20%] flex gap-4 items-center mt-6">
            <div className="w-[20%] h-[100%] bg-black rounded-xl flex justify-center items-center">
              <img src="/assets/phone.png" alt="phone" />
            </div>
            <p className="font-semibold">(+91)5637483243</p>
          </div>
        </div>
        <div className="socials glass-background w-[30%] h-[100%] p-5 flex flex-col">
          <div className="w-full h-[20%] font-customOutfit text-3xl underline">
            SOCIALS
          </div>
          <div className="w-full h-[40%] flex gap-6 items-center mt-8">
            <div className="w-[15%] h-[100%] bg-black rounded-xl flex justify-center items-center">
              <img src="/assets/fb.png" alt="fb" />
            </div>
            <div className="w-[15%] h-[100%] bg-black rounded-xl flex justify-center items-center">
              <img src="/assets/instagram.png" alt="instagram" />
            </div>
            <div className="w-[15%] h-[100%] bg-black rounded-xl flex justify-center items-center">
              <img src="/assets/twitter.png" alt="twitter" />
            </div>
            <div className="w-[15%] h-[100%] bg-black rounded-xl flex justify-center items-center">
              <img src="/assets/yt.png" alt="twitter" />
            </div>
            <div className="w-[15%] h-[100%] bg-black rounded-xl flex justify-center items-center">
              <img src="/assets/pinterest.png" alt="twitter" />
            </div>
          </div>
        </div>
        <div className="newsletters glass-background w-[30%] h-[100%] p-5 flex flex-col">
          <div className="w-full h-[20%] font-customOutfit text-3xl underline">
            NEWSLETTER
          </div>
          <p className="text-xl mt-5">
            Stay ahead of the curve with our exclusive daily newsletter directly
            in your inbox!
          </p>
          <div className="w-[95%] h-[20%] flex rounded-2xl bg-customSearch mt-5">
            <input
              type="text"
              placeholder="Search..."
              className="w-[70%] h-full rounded-2xl outline-none p-4"
            />
            <div className="w-[30%] h-full bg-black text-white rounded-tr-2xl rounded-br-2xl flex justify-center items-center">
              Subscribe
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us glass-background w-[95%] h-[15%] ml-10 mt-10 flex justify-center items-center font-customOutfit font-bold">
        Created by Anushka Sharma
      </div>
    </div>
  );
};

export default Footer;
