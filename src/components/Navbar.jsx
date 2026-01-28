export default function Navbar (){
    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Tanishka.dev</h1>
                <div className="space-x-4">
                    <a href="#about" className="hover:text-blue-600">About us</a>
                    <a href="#projects" className="hover:text-blue-600">Projects</a>
                    <a href="#contact" className="hover:text-blue-600">Contact</a>
                </div>

            </div>
        </nav>
    )
}