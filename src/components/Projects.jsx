export default function(){
    return(
        <section id="projects" className="bg-gray-50 p-6">
            <h3 className="text-2xl font-semibold mb-4 text-center">Projects</h3>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white shadow p-4 rounded">
                    <h4 className="text-lg font-bold">Task tracker</h4>
                    <p className="text-sm text-gray-600">HTML, CSS, JavaScript</p>
                    <a href="https://github.com/yourname/task-tracker" target="_blank"
                    className="text-blue-600 underline">View Code</a>
                </div>
                <div className="bg-white shadow p-4 rounded">
                    <h4 className="text-lg font-bold">Blog Platform</h4>
                    <p className="text-sm text-gray-600">Mern Stack</p>
                    <a href="https://github.com/yourname/blog-platform" target="_blank" className="text-blue-600 underline">View Code</a>
                    
                </div>
            </div>

        </section>
    )
}