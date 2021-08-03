import React from "react";

export const Method = ({children , place}) =>{
    return(
        <div className="bg-methodbg mb-5 p-5 md:pt-0 flex flex-col gap-y-6 font-Rubik rounded-xl"> {/* Method 1 */}
            <h2 className="hidden md:block text-center text-3xl font-medium py-7 text-gray-400">Method <span className="text-gray-800">{place}</span></h2>
            {children}
        </div>
    )
}

const CardInput = ({children , place , type}) =>{
    return(
        <div className="border-2 border-gray-700 rounded-xl overflow-hidden shadow-cardshadow">
            <div className="flex justify-between items-center pl-6 py-3 bg-headcardbg font-Rubik font-bold text-lg">
                <p className="text-gray-700">{type}</p>
                <div className="pl-4 pr-6 md:pr-8 py-2 bg-placebg rounded-tl-lg rounded-bl-lg text-gray-50">{place}</div>
            </div>
            <div className="bg-white p-6 py-5">
                {children}
            </div>
        </div>
    )
}

export default CardInput;