import { FaArrowRight } from "react-icons/fa6";

export const Quality = () => {
    return (
        <section className="px-6 md:px-15 max-w-7xl mx-auto py-16 md:py-30">
            {/* Flex Container: મોબાઈલમાં Column અને ડેસ્કટોપમાં Row */}
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        The Future of <span className="text-blue-600">Quality Health</span>
                    </h2>
                    
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. 
                            Auctor semper fermentum volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. 
                            Auctor semper fermentum volutpat integer vel.
                        </p>
                        <p className="hidden sm:block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. 
                            sed. Nibh est sit lobortis id semper.
                        </p>
                    </div>

                    {/* Learn More Button */}
                    <button className="text-blue-500 font-semibold flex items-center justify-center md:justify-start gap-2 group hover:text-blue-700 transition-colors mt-4">
                        Learn More 
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-1/2">
                    <img 
                        src="image/Quality.png" 
                        alt="Quality Health" 
                        className="w-full h-auto object-contain rounded-2xl shadow-sm md:shadow-none"
                    />
                </div>
                
            </div>
        </section>
    );
};