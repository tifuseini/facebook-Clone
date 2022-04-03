import React from "react";
import Image from "next/image";
import {BiSearchAlt2} from "react-icons/bi"
import {BiHomeAlt} from "react-icons/bi"
import {RiFlag2Line} from "react-icons/ri"
import {MdOutlineOndemandVideo} from "react-icons/md"
import {AiOutlineShop} from "react-icons/ai"
import {IoGameControllerOutline} from "react-icons/io5"


const Header = () =>{
    return (
        <div className="sticky top-0 z-50 flex items-center h-16 p-2 bg-white shadow-md">

                {/* Left */}
            <div className="flex min-w-fit">
                <Image
                src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                height={40}
                width={40}
                 />
                <div className="flex items-center px-2 ml-2 space-x-2 text-gray-500 bg-gray-100 rounded-full">
                <BiSearchAlt2 size = {20} />
                    <input className="hidden bg-transparent lg:inline-flex focus:outline-none" type="text" placeholder="Search Facebook" />
                </div>
            </div>

                {/* Center */}
            <div className="flex justify-center flex-grow mx-2 ">
                <div className="flex items-center px-4 rounded-md cursor-pointer h-14 md:px-10 md:hover:bg-gray-100" >
                    <BiHomeAlt className="mx-auto" size={25}/>
                </div>
                <div className="flex items-center px-4 rounded-md cursor-pointer h-14 md:px-10 md:hover:bg-gray-100" >
                    <RiFlag2Line className="mx-auto" size={25}/>
                </div>
                <div className="flex items-center px-4 rounded-md cursor-pointer h-14 md:px-10 md:hover:bg-gray-100" >
                    <MdOutlineOndemandVideo className="mx-auto" size={25}/>
                </div>
                <div className="flex items-center px-4 rounded-md cursor-pointer h-14 md:px-10 md:hover:bg-gray-100" >
                    <AiOutlineShop className="mx-auto" size={25}/>
                </div> 
                <div className="flex items-center px-4 rounded-md cursor-pointer h-14 md:px-10 md:hover:bg-gray-100" >
                    <IoGameControllerOutline className="mx-auto" size={25}/>
                </div>       
            </div>

                
            
            
        </div>
      )
};

export default Header;