import React from "react";
import Image from "next/image";

const Header = () =>{
    return (
        <div className="sticky top-0 z-50 flex items-center h-16 p-2 bg-white shadow-md">

            <div className="flex min-w-fit">
                <Image
                src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                height={40}
                width={40}
                 />
            </div>
            
            
        </div>
      )
};

export default Header;