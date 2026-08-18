import toast from "react-hot-toast";

// tryna caculate the subnet mask first

function prefixToMask(prefix){
    // okay on pem and paper its easy but like how tf do i do it here
    const Fulloctets = Math.floor(prefix/8)
    const LeftOverOctets = prefix % 8
    
}

export  {prefixToMask}