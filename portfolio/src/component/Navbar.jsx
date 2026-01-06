export default function Navbar(){
    return (
        <>
        <nav className="fixed w-full bg-blue-900  flex justify-around text-white shadow-lg z-50">
        <div className="flex gap-150 px-8 py-4">
        <h1 className="text-2xl font-bold hover:text-blue-400"><a href="#portfolio">Portfolio</a></h1>
        <ul className="flex items-center gap-10">
            <li><a href="#Home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#About" className="hover:text-blue-400">About</a></li>
            <li><a href="#Skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#Contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
        </div>
        </nav>
        </>
    )
}