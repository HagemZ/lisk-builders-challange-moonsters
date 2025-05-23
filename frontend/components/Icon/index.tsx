import React from "react"; 

const PokeballIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z" stroke="#000000" strokeWidth="1.5"></path>
    <path d="M2 11C4.59628 12.0036 6.85307 12.668 8.99803 12.993M22 11.0031C19.4075 12.0125 17.152 12.6781 15.0021 13" stroke="#000000" strokeWidth="1.5"></path>
  </svg>
);

export default PokeballIcon;