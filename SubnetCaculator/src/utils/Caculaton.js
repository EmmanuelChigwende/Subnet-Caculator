import toast from "react-hot-toast";

// tryna caculate the subnet mask first

function prefixToMask(prefix){
    // okay on pem and paper its easy but like how tf do i do it here
    const Fulloctets = Math.floor(prefix/8)
    const LeftOverOctets = prefix % 8
    // bro honestly im stuck wtf am i even doing here 
    // bro wtf is subnetting fr

    // bro wtf is this formula like who comes up with these
    const SubnetMask = prefix ===  0 ? 0 :(0xFFFFFFFF << (32 -prefix)) >>> 0
    console.log(SubnetMask)
}

export  {prefixToMask}