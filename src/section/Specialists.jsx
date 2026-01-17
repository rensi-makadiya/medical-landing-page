export const Specialists = () => {
    const data = [
        {
            image: "image/spe_1.png",
            title: "Covid-19 Test",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus."
        },
        {
            image: "image/spe_2.png",
            title: "Heart Lungs",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus."
        },
        {
            image: "image/spe_3.png",
            title: "Suppliment",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus."
        },
        {
            image: "image/spe_4.png",
            title: "Mental Health",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus."
        }
    ]

    return (
        <section className="px-6 md:px-15 max-w-7xl mx-auto py-16 md:py-30">
            <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold">
                Our Consulting Specialists
            </h2>
            
            {/* Grid Container: મોબાઈલમાં 1 કોલમ, ટેબ્લેટમાં 2, અને ડેસ્કટોપમાં 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 md:mt-15 gap-6">
                {
                    data.map((curr, index) => (
                        <div key={index} className="border rounded-2xl border-blue-900/20 p-6 flex flex-col gap-4 hover:bg-blue-500 hover:text-white group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                            
                            <div className="rounded-full bg-blue-100 size-16 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <img src={curr.image} alt={curr.title} className="p-4 object-contain w-full h-full"/>
                            </div>

                            <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                                {curr.title}
                            </h3>

                            <p className="text-gray-600 group-hover:text-blue-50 transition-colors text-sm leading-relaxed">
                                {curr.desc}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}