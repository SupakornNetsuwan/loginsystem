import React , { useState } from "react";
import { HiUser , HiKey , HiOutlineQuestionMarkCircle , HiChevronDown , HiOutlineKey , HiOutlineUserCircle , HiEye , HiEyeOff} from "react-icons/hi"
import { Link } from "react-router-dom";
/* Popover from Headless UI */
import { Popover , Transition } from "@headlessui/react"
/* Componennts */
import Logo from "../register/Logo.js";

const Login = () =>{
    let [username , setUsername] = useState("")
    let [password , setPassword] = useState("")
    let [seePassword , setSeePassword] = useState(false)
    let pros = [
        {emoji:"😜", message:"Friendly for new starter"},
        {emoji:"🧐", message:"Good for logical analysis"},
        {emoji:"🙌", message:"Better with team working"},
        {emoji:"💯", message:"High performance setup"}
    ]

    let submitHandle = (e) =>{
        e.preventDefault()
        console.log(e)
    }

    return(
        <div className="min-w-screen min-h-screen px-5 py-10 md:p-10 flex justify-end">
            <div className="fixed top-0 left-0 h-leftcontent hidden xl:flex flex-col items-center pl-16 pr-44 py-10 box-content w-3/12 bg-gradient-to-b from-yellow-400 to-yellow-500 space-y-8">
                <Logo/>
                <p className="font-Rubik text-lg text-white">It's a tool for coding review!</p>
                <div className="flex flex-col p-2 bg-gray-50 rounded-lg border-2 border-gray-700 space-y-1 relative z-10">
                    {pros.map((pro,i)=>{
                        return(
                        <div key={i} className="flex justify-between items-center bg-gray-100 p-1.5 pr-3 rounded-md gap-x-8 border-2    border-gray-200">
                            <p className="p-3 bg-white text-xl rounded-md">{pro.emoji}</p>
                            <p className="font-Rubik text-lg text-gray-700">{pro.message}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className="relative w-full xl:w-8/12 px-5 py-10 md:p-10 rounded-2xl divide-y-2 bg-gray-50 z-10">
                <h2 className="font-Rubik text-4xl font-semibold text-center text-yellow-500 pb-3">LOGIN</h2>
                <div className="w-full flex flex-col items-center pt-10">
                    <div className="bg-methodbg mb-5 p-5 md:pt-0 flex flex-col font-Rubik rounded-xl"> {/* Method 1 */}
                        <h2 className="hidden md:block text-center text-3xl font-medium py-7 text-gray-400">Let's <span className="text-gray-800">Coding🔥</span></h2>
                        <div className="bg-white border-2 border-gray-700 rounded-xl pt-0 shadow-cardshadow">
                            <div className="h-1 rounded-bl-xl rounded-br-xl bg-yellow-400 mx-7"/>
                            <form onSubmit={submitHandle}>
                                <div className="pt-8 p-7 space-y-5">
                                    <UserInput icon={<HiUser/>} type="Username" iconStatus={username}>
                                        <input type="text" name="username" className={`login-input ${username ? "border-gray-500" : "border-gray-300"}`} value={username} onChange={(e)=> setUsername(e.target.value)} autoComplete="off"/>
                                    </UserInput>
                                    <UserInput icon={<HiKey/>} type="Password" iconStatus={password}>
                                        <input type={seePassword ? "text" : "password"} name="password" className={`login-input ${password ? "border-gray-500" : "border-gray-300"}`} value={password} onChange={(e)=> setPassword(e.target.value)} autoComplete="off"/>
                                        <div onClick={()=> setSeePassword(!seePassword)} className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer no-select">{seePassword ? <HiEyeOff/> :<HiEye/>}</div>
                                    </UserInput>
                                </div>
                                <div className="mt-20 flex justify-between bg-yellow-100 py-5 px-7 rounded-bl-xl rounded-br-xl">
                                    <div className="flex gap-x-2">
                                        <Popover className="relative">
                                            {({ open })=>(
                                                <>
                                                    <Popover.Button className="border-2 bg-white group hover:bg-gray-50 active:bg-gray-100 border-gray-700 rounded-lg flex items-center overflow-hidden hover:shadow-md transition-all duration-150 outline-none">
                                                        <div className="px-3 py-2 text-2xl bg-yellow-400 group-hover:bg-headcardbgrounded-tr-md rounded-br-md"><HiOutlineQuestionMarkCircle/></div>
                                                        <div className={`px-1 text-xl transform ${open && "rotate-180"} duration-200`}><HiChevronDown/></div>
                                                    </Popover.Button>
                                                    <Transition
                                                        enter="transition duration-150 ease-out"
                                                        enterFrom="transform scale-50 opacity-0"
                                                        leave="transition duration-75 ease-out"
                                                        leaveTo="transform scale-50 opacity-0"
                                                    >
                                                    <Popover.Panel className="absolute bg-white p-3 border-2 border-gray-300 rounded-lg shadow-md transform -translate-x-3 translate-y-2">
                                                        {[
                                                            {topic:"Forgot Username", describe:"I forgot my username"},
                                                            {topic:"Forgot Password", describe:"I forgot my password"}
                                                        ].map((dialogContent,i)=>{
                                                            return <SelectDialog key={i} {...dialogContent}/>
                                                        })}
                                                    </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                        <Link to="/"><button className="px-4 py-2 bg-white border-2 hover:bg-gray-50 active:bg-gray-100 border-gray-700 rounded-lg hover:shadow-md transition-all duration-150">Register</button></Link>
                                    </div>
                                    <button className={`px-6 py-2 bg-yellow-400 disabled:opacity-60 font-medium border-2 border-gray-700 ${(username && password) && "hover:bg-headcardbg hover:shadow-md transition-all duration-300 active:bg-placebg"} rounded-lg`} disabled={!username || !password}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const UserInput = ({children , icon , type , iconStatus}) =>{
    return(
        <div>
            <p className="font-Rubik text-gray-700">{type}</p>
            <div className={`relative mt-1 focus-within:text-gray-600 ${iconStatus ? "text-gray-600" : "text-gray-400"} transition-colors duration-300`}>
                {children}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-lg pl-4">{icon}</div>
            </div>
        </div>
    )
}

const SelectDialog = ({topic , describe}) =>(
    <Link to={`/recover/${topic.split(" ").join("").toLowerCase()}`}>
    <div className="flex w-72 gap-x-4 items-start p-3 group hover:bg-gray-100 select-none cursor-pointer rounded-md">
        <div className="bg-yellow-200 p-2.5 text-4xl rounded-md text-yellow-500 border-2 border-yellow-500 border-opacity-0 group-hover:border-opacity-100 transition-all duration-150 ease-int">
            {topic.split(" ")[1].toLowerCase() === "username" ? <HiOutlineUserCircle/> :<HiOutlineKey/>}
        </div>
        <div className="">
            <h2 className="font-bold text-xl text-gray-800">{topic}</h2>
            <p className="text-gray-600 text-sm">{describe}</p>
        </div>
    </div>
    </Link>
)

export default Login;