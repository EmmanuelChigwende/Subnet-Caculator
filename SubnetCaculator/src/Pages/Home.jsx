import React from "react";
import toast from "react-hot-toast";
import { useState } from "react";

import CheckValues from "../utils/Validation";
import { prefixToMask } from "../utils/Caculaton";

const Home = () => {
  // Handles the valuses put in by the user
  const [ipAddress, setIpAddress] = useState(null);
  const [prefix, setPrefix] = useState(null);

  const [CaculatedSubnetMask,setCaculatedSubnetMask] = useState(null)

  // okay so first its input validation
  function CaculateSubnet() {
    const ValidatedUserInput = CheckValues(ipAddress, prefix);
    toast.success(ValidatedUserInput.ipParts)
    const Subnetmask = prefixToMask(ValidatedUserInput.prefix);
    toast.success(Subnetmask)
    setCaculatedSubnetMask(Subnetmask)
  }

  return (
    <div className=" h-full w-[400px] rounded-xl p-2 bg-[#020617]">
      <div>
        <h1 className="text-white text-[2rem] font-extrabold">
          Subnet Caculator
        </h1>
        <h2 className="text-[#94a3b8]">
          Enter an IP address and prefix length to see the subnet details.
        </h2>
      </div>
      <div className="mt-10">
        <h1 className="text-[#94a3b8]">Ip Address</h1>
        <input
          type="text"
          name="ipaddress"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          className="bg-[#334155] p-1 rounded-[5px] mt-5 w-full border-[#94a3b8] border-[2px] text-white"
        />
      </div>
      <div className="mt-10">
        <h1 className="text-[#94a3b8]">Prefix Lenght (CIDR)</h1>
        <div className="flex items-center gap-2">
          <p className="text-[#94a3b8] items-center justify-center pt-3">\</p>
          <input
            type="number"
            name="prefix"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            className="bg-[#334155] p-1 rounded-[5px] mt-5 w-[100px] border-[#94a3b8] border-[2px] text-white"
          />
        </div>
      </div>
      <button
        onClick={CaculateSubnet}
        className="w-full bg-[#5fc4f3] hover:bg-[#31a1d4] mt-10 h-[50px] rounded-[10px] text-white text-[1.5rem] font-extrabold"
      >
        Caculate
      </button>

      {/* Output displays here */}

      <div className="h-[225px] w-[400px] mt-[30px] p-2 rounded-[15px] bg-[#334155]">
        <ul className="text-[1.2rem] pl-1 text-white grid-cols-1 space-y-2 gap-2">
          <li>Network Address: </li>
          <li>Broadcast Address: </li>
          <li>Subnet Mask: {CaculatedSubnetMask}  </li>
          <li>IP address range: </li>
        </ul>
        <div className="mt-[10px]">
          <h1 className="w-full text-[1.5rem] text-white font-extrabold text-center flex items-center justify-center bg-[#5fc4f3]  hover:bg-[#31a1d4] h-[50px] rounded-[10px]">
            How i work
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
