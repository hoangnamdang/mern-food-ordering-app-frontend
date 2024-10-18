import React from "react";
import landingImg from "../assets/landing.png";
import appDownloadImg from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click way!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImg} alt="" />
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even fast!
          </span>
          <span>Download the MernEat app</span>
          <img src={appDownloadImg} alt="img download" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
