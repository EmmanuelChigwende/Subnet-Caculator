import toast from "react-hot-toast";

function CheckValues(ipAddress,prefix) {
    if (ipAddress == null || prefix == null) {
      toast.error("Please fill in all feilds");
    } else {
      if (prefix < 0 || prefix > 32) {
        toast.error("please correct prefix value : Value is out of range");
      } else {
        if (ipAddress == "") {
          toast.error("Please input valid ip address");
        } else {
          const parts = ipAddress.split(".");
          if (parts.length != 4) {
            toast.error("Invalid ip address : lenght requirements not meet");
          } else {
            for (let part of parts) {
              let IsValid = true;
              if (part == "" || Number.isNaN(Number(part))) {
                toast.error("Invalid ip address : please input digits");
                IsValid = false;
                break;
              } else {
                const num = Number(part);
                if (num < 0 || num > 255) {
                  toast.error("Invalid ip address : out of range");
                  IsValid = false;
                  break;
                }
                else{
                    const ipParts = ipAddress.split(".")
                    return {
                        ipParts,
                        prefix
                    }
                }
              }
            }
          }
        }
      }
    }
  }


  export default CheckValues