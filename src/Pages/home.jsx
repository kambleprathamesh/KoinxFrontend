import React from "react";
import TradingViewChart from "../Components/TrendingChart/TrendingChart";

const Home = () => {
  return (
    <div className="bg-[#f0f2f5] w-[100%] md:h-[100vh] h-[200vh] border-2 border-green-900">
      <div className="w-[100%] md:w-[95%]  p-3  mx-auto flex flex-col md:flex-row border-2 gap-6 border-green-900">
        <div className="w-[100%] md:w-[60%]">
          <TradingViewChart />
        </div>

        <div className="w-[30%] border-2 border-red-700">hbfhevchuh</div>
      </div>
    </div>
  );
};

export default Home;
