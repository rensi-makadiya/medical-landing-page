import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";

export const Member = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: "linear",
        // ડોટ્સના દેખાવ માટે કસ્ટમ ક્લાસ
        dotsClass: "slick-dots custom-dots",
    };

    const data = [
        {
            image: "image/mem_1.jpg",
            name: "Jane Cooper",
            date: "12/4/17",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            star: 5
        },
        {
            image: "image/mem_2.png",
            name: "Cooper Jane",
            date: "15/10/17",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            star: 4
        },
        {
            image: "image/mem_3.png",
            name: "Cooper Thape",
            date: "27/6/17",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            star: 5
        }
    ];

    return (
        <section className="py-16 md:py-30 bg-blue-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-15 flex flex-col md:flex-row items-center gap-12">
                
                {/* Left Side: Header Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        What <span className="text-blue-600">Our Member’s</span> Saying About Us
                    </h2>
                    <p className="mt-5 text-gray-600 max-w-sm mx-auto md:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                    </p>
                </div>

                {/* Right Side: Slider */}
                <div className="w-full md:w-1/2 min-w-0"> {/* min-w-0 સ્લાઇડરને કન્ટેનરની બહાર જતું રોકે છે */}
                    <div className="slider-container relative">
                        <Slider {...settings}>
                            {data.map((curr, index) => (
                                <div key={index} className="px-1"> {/* સ્લાઇડ વચ્ચે ગેપ માટે */}
                                    <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-200 shadow-sm outline-none">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                            <div className="flex items-center">
                                                <img 
                                                    src={curr.image} 
                                                    alt={curr.name}
                                                    className="size-14 md:size-16 rounded-full object-cover border-2 border-blue-100"
                                                />
                                                <div className="ml-4">
                                                    <p className="font-bold text-gray-800">{curr.name}</p>
                                                    <p className="text-sm text-gray-500">{curr.date}</p>
                                                </div>
                                            </div>
                                            
                                            {/* Stars */}
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar 
                                                        key={i} 
                                                        className={`size-4 md:size-5 ${i < curr.star ? "text-yellow-400" : "text-gray-300"}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="mt-6 text-gray-700 leading-relaxed italic">
                                            "{curr.desc}"
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

            </div>
        </section>
    );
};