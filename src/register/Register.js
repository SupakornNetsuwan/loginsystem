import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom"
import { HiOutlineX , HiOutlineCheck , HiEye , HiEyeOff} from "react-icons/hi";
/* Axios */
import axios from "axios";
/* Components */
import Logo from "./Logo.js";
import CardInput , {Method} from "./CardInput.js";
import SigninButton from "./SigninButton.js";
/* react-micro-modal */
import MicroModal from "react-micro-modal"

const Register = () =>{
  let [form , setForm] = useState({username:"",password:"",conPassword:""})
  let [usernameCheck , setUsernameCheck] = useState(false)
  let [passwordCheck , setPasswordCheck] = useState(false)
  let [modalToggle , setModalToggle]  = useState({toggle:false , message:""})
  let [seePassword , setSeePassword] = useState(false)

  let changeHandle = (e) =>{
    setForm({...form, [e.target.name]:e.target.value.split(" ").join("_")})
  }

  /* Form validation */
  useEffect(()=>{
    form.password === form.conPassword && form.password ? setPasswordCheck(true) : setPasswordCheck(false)
    form.username ? setUsernameCheck(true) : setUsernameCheck(false)
  },[form])
  
  let submitHandle = (e) =>{
    e.preventDefault();
    if(usernameCheck && passwordCheck){
      axios.post("http://localhost:3001/register", form)
      .then((results)=>{
        console.log(results.data)
        setModalToggle({...modalToggle , toggle:true , message:results.data.message , status:results.data.status})
      })
      .catch((err)=> console.log("Can't submit register"))
    }
  }

  useEffect(()=>{
    console.log(modalToggle)
  },[modalToggle])

  return (
    <div className="min-w-screen min-h-screen px-5 py-10 md:p-10 flex justify-end">
      <ModalDisplaying modalToggle={modalToggle} setModalToggle={setModalToggle}/>
      <div className="fixed w-3/12 min-w-400 h-leftcontent top-0 left-0 m-10 hidden xl:flex flex-col items-center py-6 px-10 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-xl font-Rubik">
            <Logo/>
            <p className="text-center font-rubik leading-snug mt-8 text-white text-lg">Join our community <br/>and create your own <br/>amazing code review!</p>
            <img className="absolute bottom-10 left-0  w-4/6 z-10 filter drop-shadow-mac image-sharper" src="./images/iMac.png" alt="iMac"/>
            <img className="absolute bottom-7 right-2 w-3/6 transform rotate-45 z-20 filter drop-shadow-folder image-sharper" src="./images/Folder.png" alt="Folder"/>
            <img className="absolute bottom-56 right-1/2 transform translate-x-36 w-1/5 filter drop-shadow-sm image-sharper" src="./images/Processor.png" alt="Processor"/>
          </div>
      <div className="w-full xl:w-8/12 lg:px-6 lg:pt-8 rounded-2xl divide-y-2">
        <div>
          <h2 className="text-yellow-500 font-Rubik font-semibold text-4xl md:text-center" onClick={()=> setModalToggle(true)}>REGISTER</h2>
          <p className="text-headcardbg font-Rubik text-2xl pb-5 md:text-center">Let's setup your account <span className="text-xl">👋</span></p>
        </div>
        <form onSubmit={submitHandle}>
          <div className="flex flex-col md:flex-row justify-center md:divide-x-2 pt-5"> {/* Methods */}
            <div className="md:pr-5"> {/* Method 1*/}
              <Method place="01">
                <CardInput place="01" type="Username">
                  <div className={`flex border-2 border-gray-300 rounded-md overflow-hidden h-12 ${form.username && "border-gray-400"} transition-colors duration-300`}>
                    <input type="text" name="username" className=" outline-none w-full px-3 font-Rubik font-medium text-gray-700 text-lg" value={form.username} onChange={changeHandle} autoComplete="off"/>
                    <div className={`px-3 flex items-center ${usernameCheck ? "bg-yellow-400 text-white" : "bg-gray-200 text-gray-700"} border-l-2 border-gray-300 ${form.username && "border-gray-400"} text-lg`}>{usernameCheck ? <HiOutlineCheck/> : <HiOutlineX/>}</div>
                  </div>
                </CardInput>
                <CardInput place="02" type="Password">
                  <div className={`relative text-gray-700 transition-colors duration-300`}>
                    <input type={seePassword ? "text" : "password"} name="password" className={`outline-none w-full px-3 font-Rubik font-medium transition-colors duration-300 text-lg border-2 border-gray-300 h-12 rounded-md ${form.password && "border-gray-400"}`} value={form.password} onChange={changeHandle} autoComplete="off"/>
                    <button onClick={()=> setSeePassword(!seePassword)} className={`absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 ${form.password && "text-gray-700"}`}>{seePassword ? <HiEyeOff/> :<HiEye/>}</button>
                  </div>
                  <p className={`text-center font-Rubik text-gray-400 my-2 ${form.conPassword && "text-gray-700"}`}>Confirm password</p>
                  <div className={`flex border-2 border-gray-300 rounded-md overflow-hidden h-12 transition-colors duration-300 ${form.conPassword && "border-gray-400"}`}>
                    <input type={seePassword ? "text" : "password"} name="conPassword" className="outline-none text-gray-700 text-lg w-full px-3 font-Rubik font-medium" value={form.conPassword} onChange={changeHandle} autoComplete="off"/>
                    <div className={`px-3 flex items-center ${passwordCheck ? "bg-yellow-400 text-white" : "bg-gray-200 text-gray-700"} transition-colors border-l-2 border-gray-300 duration-300 text-lg ${form.conPassword && "border-gray-400"}`}>{passwordCheck ? <HiOutlineCheck/> : <HiOutlineX/>}</div>
                  </div>
                </CardInput>
              </Method>
                <div className="flex flex-col-reverse items-center md:flex-row justify-center gap-2">
                  <Link to="/login" className="w-3/4 max-w-xs md:w-full md:max-w-none">
                    <button type="button" className="w-full px-6 py-2.5 hover:bg-gray-50 active:bg-gray-100 border-2 border-gray-700 font-Rubik font-medium rounded-md shadow-sm hover:shadow-md transition-all duration-300">Login?</button>
                  </Link>
                  <button type="submit" className={`w-3/4 max-w-xs md:w-full md:max-w-none px-6 py-2.5 bg-yellow-400 ${(usernameCheck && passwordCheck) &&"hover:bg-headcardbg hover:shadow-md transition-all duration-300"} active:bg-placebg border-2 border-gray-700 font-Rubik font-medium rounded-md shadow-sm disabled:opacity-60 disabled:cursor-default`} disabled={!usernameCheck || !passwordCheck}>Register</button>
                </div>
            </div>
            <div className="md:pl-5"> {/* Method 2 */}
              <div className="hidden md:block"> {/* On medium size */}
                <Method place="02"><SigninButton/></Method>
              </div>
              <div className="flex flex-col items-center md:hidden mt-10 gap-y-5"> {/* On medium size below */}
                <div className="w-full flex gap-x-2 items-center">
                  <div className="topic-flatline bg-gray-300"/><p className="font-Rubik text-lg">Or</p><div className="topic-flatline bg-gray-300"/>
                </div>
                <SigninButton/>
              </div>
            </div>  
          </div>
        </form>
      </div>
    </div>
  );
}

const ModalDisplaying = ({modalToggle , setModalToggle}) =>{
  return(
    <MicroModal
      overrides={{ Overlay:{style:{zIndex:20}},Dialog:{className:"border-2 border-yellow-400",style:{borderRadius:"1rem"}} }}
      open={modalToggle.toggle}
      handleClose={() => setModalToggle({...modalToggle, toggle:false})}
      openClass="Yes"
    >
      {(close) =>{
       return(
        <div className="flex flex-col items-center font-Rubik">
          <h1 className="text-gray-700">{modalToggle.message}</h1>
          {modalToggle.status && <div className="p-2 bg-yellow-400 text-4xl text-white rounded-full shadow-md mt-4"><HiOutlineCheck/></div>}
          <button onClick={close} className="hover:bg-gray-50 border-2 border-gray-700 rounded-md px-4 py-2 outline-none mt-10">Close</button>
        </div>
       )
      }}
    </MicroModal>
  )
}

export default Register;