import { FaRegCopyright, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footor = () => {
    return (
        <footer className="w-full bg-blue-500 text-white">
            {/* Main Footer Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-15 py-12 md:py-16 flex flex-col md:flex-row gap-10 md:gap-20">
                
                {/* Section 1: Logo & Desc */}
                <div className="w-full md:w-[40%] flex flex-col gap-4 text-center md:text-left items-center md:items-start">
                    <h5 className="text-3xl font-serif italic">E-sheba</h5>
                    <p className="text-sm leading-relaxed opacity-90 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat integer vel.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <div className="p-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 cursor-pointer transition-all"><FaFacebook size={20}/></div>
                        <div className="p-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 cursor-pointer transition-all"><FaInstagram size={20}/></div>
                        <div className="p-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 cursor-pointer transition-all"><FaTwitter size={20}/></div>
                    </div>
                </div>

                {/* Section 2: Links */}
                <div className="w-full md:w-[25%] text-center md:text-left">
                    <h5 className="text-xl font-bold mb-6">Useful Links</h5>
                    <div className="flex flex-col gap-3">
                        <div className="hover:underline cursor-pointer opacity-80 hover:opacity-100 transition-all">About Us</div>
                        <div className="hover:underline cursor-pointer opacity-80 hover:opacity-100 transition-all">Privacy Policy</div>
                        <div className="hover:underline cursor-pointer opacity-80 hover:opacity-100 transition-all">Our Mission</div>
                        <div className="hover:underline cursor-pointer opacity-80 hover:opacity-100 transition-all">Our Team</div>
                    </div>
                </div>

                {/* Section 3: Address/Map */}
                <div className="w-full md:w-[35%] text-center md:text-left">
                    <h5 className="text-xl font-bold mb-6">Address</h5>
                    <div className="w-full h-40 rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg">
                        <iframe
                            title="Google Maps Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697915724385!2d72.54145227591874!3d23.034856315848525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e87265880b%3A0x6280436d4001338d!2sGujarat%20University!5e0!3m2!1sen!2sin!4v1700000000000"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="border-t border-white/20 py-6 text-center ">
                <p className="flex items-center justify-center gap-2 text-sm opacity-80 text-white">
                    <FaRegCopyright /> {new Date().getFullYear()} E-sheba. All Rights Reserved
                </p>
            </div>
        </footer>
    );
};