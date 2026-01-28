export default function Hero (){
    return(
        <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50-to-nlue-100">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Hi, I am Tanishka Chaturvedi</h2>
                <p className="text-lg text-gray-600">Frontend Developer | React | JavaScript</p>
                <a href="/resume.pdf" download className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Download Resume

                </a>

            </div>

        </section>
    )
}