import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
export default function Navbar(){
    const [nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
    return (
        <>
        <nav className="flex justify-between items-center px-8 py-4 bg-blue-900 text-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold hover:text-blue-400"><a href="#portfolio">Portfolio</a></h1>
        <ul className="hidden md:flex gap-10">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
            {nav?<IoIosClose size={30}/>:<IoIosMenu size={30}/>}
        
        </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-blue-900 ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] top-0 ease-in-out duration-500"
        }
      >
        <h1 className="text-2xl font-bold m-4 text-blue-400">Portfolio</h1>
        <li className="p-4 border-b border-blue-800"><a href="#home" onClick={handleNav}>Home</a></li>
        <li className="p-4 border-b border-blue-800"><a href="#about" onClick={handleNav}>About</a></li>
        <li className="p-4 border-b border-blue-800"><a href="#skills" onClick={handleNav}>Skills</a></li>
        <li className="p-4"><a href="#contact" onClick={handleNav}>Contact</a></li>
      </ul>
    </nav>
        </>

)
 
}