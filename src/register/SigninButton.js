import React from "react";
import {FcGoogle} from "react-icons/fc";

const SigninButton = () =>{
    return(
        <div className="relative w-3/4 max-w-xs md:w-72 md:max-w-none cursor-pointer select-none">
            <div className="relative w-full px-6 py-2.5 bg-white rounded-lg border-2 border-gray-700 z-10 transform active:translate-y-0.5 active:bg-gray-100 hover:bg-gray-100">
                <p className="font-rubik md:text-xl font-bold text-center flex justify-center items-center gap-x-2"><FcGoogle/> Sign in as google</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full transform translate-y-1.5 bg-gray-200 font-rubik text-xl font-medium rounded-lg border-2 border-gray-700 z-0"></div>
        </div>
    )
}

export default SigninButton;