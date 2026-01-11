import  {useState } from "react"

export default function Navbar(){
    const [isOpen,setIsOpen]=useState(false)
    return (
        <>
        <nav className="fixed w-full  bg-blue-900  flex  text-white  p-4">
        <div className="flex max-w-7xl mx-auto gap-70 justify-between items-center">
        <h1 className="text-2xl font-bold hover:text-blue-400"><a href="#portfolio">Portfolio</a></h1>
        <ul className="hidden lg:flex space-x-6 font-medium items-center gap-10">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
       <button className="lg:hidden block border px-3 py-1 rounded-md" onClick={()=>setIsOpen(!isOpen)} style={{display:window.innerWidth<1024?'block':'none'}}>
        {isOpen ? 'Close':'Menu'}
       </button>
        </div>
        {isOpen && (
            <ul className="lg:hidden flex flex-col space-y-2 mt-4 text-center p-4 rounded">
                
                <li><a href="home" onClick={()=>setIsOpen(false)} className="block py-2 border-blue-800">Home</a></li>
                <li><a href="#about" onClick={()=>setIsOpen(false)} className="block py-2 border-blue-800">About</a></li>
                <li><a href="#skills" onClick={()=>setIsOpen(false)} className="block py-2 border-blue-800">Skills</a></li>
                <li><a href="#contact" onClick={()=>setIsOpen(false)} className="block py-2 border-blue-800">Contact</a></li>
        
            </ul>
        )}
        

     
        </nav>
        </>
    )
}