import  {useState } from "react"

export default function Navbar(){
    const [isOpen,setIsOpen]=useState(false)
    return (
        <>
        <nav className="flex justify-between items-center px-8 py-4 bg-blue-900 text-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold hover:text-blue-400"><a href="#portfolio">Portfolio</a></h1>
        <ul className="flex gap-10">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
        </nav>
        </>

)
 
}