import React from "react";
import toast from "react-hot-toast";

const Home = () => {
  return (
    <div
      onLoad={toast.success("hiee i loaded properly")}
      className=" h-[500px] w-[400px] rounded-xl p-2"
    >
      <div>
        <h1 className="text-white text-[2rem] font-extrabold">
          Subnet Caculator
        </h1>
        <h2 className="text-[#94a3b8]">
          Enter an IP address and prefix length to see the subnet details.
        </h2>
      </div>
      <div className="mt-10">
        <h1 className="text-[#94a3b8]">
            Ip Address
        </h1>
        <input type="text" className="bg-[#334155] p-1 rounded-[5px] mt-5 w-full border-[#94a3b8] border-[2px] text-white"/>
      </div>
    </div>
  );
};

export default Home;
