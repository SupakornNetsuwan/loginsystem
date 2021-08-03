import React from "react";
import {HiCode} from "react-icons/hi";

const Logo = () =>{
    return(
        <div className="w-full">
            <div className="flex gap-x-2 items-center">
              <div className="topic-flatline bg-gray-50"/>
              <div className="text-4xl text-gray-50"><HiCode/></div>
              <div className="topic-flatline bg-gray-50"/>
            </div>
            <h2 className="text-3xl font-Rubik font-semibold text-gray-800 text-center py-1">Code.review</h2>
            <div className="topic-flatline bg-gray-50 mt-3"/>
        </div>
    )
}

export default Logo