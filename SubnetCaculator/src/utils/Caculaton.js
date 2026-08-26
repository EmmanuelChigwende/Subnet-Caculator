import toast from "react-hot-toast";

// tryna caculate the subnet mask first
 const mask = [];
 let intrestingOctetValue = 0
 let intrestingOctetPosition = 0
function prefixToMask(prefix) {
  // okay on pem and paper its easy but like how tf do i do it here
  const Fulloctets = Math.floor(prefix / 8);
  const LeftOverOctets = prefix % 8;
  // bro honestly im stuck wtf am i even doing here
  // bro wtf is subnetting fr

  // bro wtf is this formula like who comes up with these
  //    okay im going to be honest im also tryna study what this is
  // it does make a lot of sense if you think about it
 
  for (let i = 0; i < 4; i++) {
    if (i < Fulloctets) {
      mask.push(255);
    } else if (i === Fulloctets && LeftOverOctets > 0) {
      const value = (255 << (8 - LeftOverOctets)) & 255;
      mask.push(value);
      intrestingOctetValue = value
      intrestingOctetPosition = i
    } else {
      mask.push(0);
    }
  }
  return mask.join(".");
}

function CaculateMagicNumber(ipaddress) {
  const magicNumber = 256 - intrestingOctetValue
  
    for(let i = 0; i < 4 ; i++){
        if(i == intrestingOctetPosition){
            const intrestingIpAddressOctet = ipaddress[i]
            console.log(intrestingIpAddressOctet)
            const value = Math.floor(intrestingIpAddressOctet/magicNumber)* magicNumber
            ipaddress[i] = value
            console.log(ipaddress)

        }
    }


  return ipaddress
}


export { prefixToMask, CaculateMagicNumber };
