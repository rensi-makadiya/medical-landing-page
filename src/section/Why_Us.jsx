import { GiCheckMark } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";

export const WhyUs = () => {
    const data = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    ]

    return (
        <section className="px-6 md:px-15 max-w-7xl mx-auto py-16 md:pb-30 flex flex-col md:flex-row items-center gap-10 md:gap-20">
            
            {/* Image Section: મોબાઈલમાં પહેલા દેખાશે */}
            <div className="w-full md:w-1/2">
                <img 
                    src="image/why_us.png" 
                    alt="Why Choose Us" 
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                    Why You Choose Us?
                </h2>
                
                <div className="mt-8 md:mt-10 space-y-4">
                    {
                        data.map((curr, index) => (
                            <div key={index} className="flex items-start">
                                <div className="mt-1 bg-blue-100 p-1 rounded-full">
                                    <GiCheckMark className="text-blue-500 text-sm md:text-base"/>
                                </div>
                                <p className="ml-4 text-gray-700 leading-relaxed">
                                    {curr}
                                </p>
                            </div>
                        ))
                    }
                </div>

                {/* Learn More Button */}
                <button className="group text-blue-500 font-semibold flex items-center gap-2 mt-10 hover:text-blue-700 transition-colors mx-auto md:mx-0">
                    Learn More 
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
            </div>
        </section>
    )
}