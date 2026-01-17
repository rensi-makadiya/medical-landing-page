import CountUp from "react-countup";
import { DropDown } from "../Components/DropDown";

export const Hero = () => {
  return (
    <>
      <section className="bg-blue-100 min-h-screen relative overflow-hidden">
        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-15 flex flex-col md:flex-row items-center justify-between pt-20 md:pt-0 min-h-[calc(100vh-112px)]">
          
          {/* Left Content: Text & Search */}
          <div className="w-full md:w-1/2 z-40 text-center md:text-left">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Find & Search Your <span className="text-blue-600">Favourite</span> Doctor
              </h1>
              {/* Decorative Line - hidden on small screens or adjusted */}
              <div className="hidden md:block absolute -bottom-2 left-0 w-40">
                <img src="image/line.png" alt="line" />
              </div>
            </div>
            
            <p className="max-w-md mx-auto md:mx-0 mt-6 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
            </p>

            {/* Search Bar / Dropdown */}
            <div className="relative bg-white w-full max-w-2xl h-14 md:h-16 rounded-full shadow-xl flex items-center px-4 gap-4 mt-10 md:mt-18">
              <DropDown />
            </div>
          </div>

          {/* Right Content: Doctor Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end mt-10 md:mt-0 relative z-30">
            <img
              src="image/doctor.png"
              alt="Doctor"
              className="h-[50vh] md:h-[80vh] object-contain"
            />
            {/* Background Circle Decor */}
            <div className="absolute bg-blue-300 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full -bottom-10 -right-10 md:right-0 z-[-1] opacity-50 md:opacity-100"></div>
          </div>
        </div>

        {/* Stats Bar - Bottom */}
        <div className="relative md:absolute bottom-0 w-full bg-blue-600 py-6 md:py-0 px-6 md:px-20 text-white z-40">
          <div className="max-w-7xl mx-auto md:h-28 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
            
            {/* Stat 1 */}
            <div className="text-center px-10 text-white">
              <h2 className="text-2xl md:text-4xl font-bold text-white">24/7</h2>
              <p className="text-blue-100 text-sm md:text-base">Online Support</p>
            </div>

            <div className="hidden md:block bg-white/30 w-[1px] h-16 mx-4"></div>

            {/* Stat 2 */}
            <div className="text-center px-10">
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                <CountUp start={0} end={100} duration={3} enableScrollSpy={true} scrollSpyOnce={true} className="text-white"/>+
              </h2>
              <p className="text-blue-100 text-sm md:text-base">Doctors</p>
            </div>

            <div className="hidden md:block bg-white/30 w-[1px] h-16 mx-4"></div>

            {/* Stat 3 */}
            <div className="text-center px-10 text-white">
              <h2 className="text-2xl md:text-4xl font-bold text-white">1M+</h2>
              <p className="text-blue-100 text-sm md:text-base">Active Patients</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};