import { FaArrowRight } from "react-icons/fa6";

export const SubScribe = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 md:px-15 pb-20 md:pb-30">
            {/* Background Box: મોબાઈલમાં પેડિંગ ઓછું કર્યું છે */}
            <div className="bg-blue-500 p-8 md:p-16 lg:px-30 rounded-[2rem] flex flex-col justify-center items-center text-center shadow-xl">
                
                <h4 className="text-white text-2xl md:text-4xl font-bold mb-8 md:mb-10">
                    Subscribe To Our Newsletter
                </h4>

                <div className="relative w-full max-w-2xl">
                    <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="bg-white w-full h-14 md:h-16 rounded-full px-6 md:px-8 text-gray-800 outline-none focus:ring-2 focus:ring-blue-300 transition-all placeholder:text-gray-400"
                    />
                    
                    {/* Submit Button: મોબાઈલમાં સાઈઝ એડજસ્ટ કરી છે */}
                    <button 
                        className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 group"
                        aria-label="Subscribe"
                    >
                        <FaArrowRight className="size-11 md:size-12 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-md group-hover:translate-x-1" />
                    </button>
                </div>
                
                <p className="text-blue-100 text-xs md:text-sm mt-4 opacity-80">
                    We value your privacy. No spam, ever.
                </p>
            </div>
        </section>
    );
};