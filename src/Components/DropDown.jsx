import { useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
export const DropDown = () => {

    const [openDoctor, setOpenDoctor] = useState(false);
    const [openLocation, setOpenLocation] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState("Doctor’s Name");
    const [selectedLocation, setSelectedLocation] = useState("Location");

    const doctors = ["Dr. Patel", "Dr. Mehta", "Dr. Shah"];
    const locations = ["Ahmedabad", "Surat", "Rajkot"];

    return (
        <>
            <div className="relative flex-1">
                <div
                    onClick={() => {
                        setOpenDoctor(!openDoctor);
                        setOpenLocation(false);
                    }}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <p><PiUserCircleLight className="w-[30px] h-[30px]  rounded-full border-blue-950 p-0.5" /></p>
                    <p>{selectedDoctor}</p>
                    <p><RiArrowDropDownLine /></p>
                </div>
                {openDoctor && (
                    <div className="absolute top-12 left-0 w-full bg-white shadow-xl border rounded-lg p-2 z-50">
                        {doctors.map((curr) => (
                            <p
                                key={curr}
                                onClick={() => {
                                    setSelectedDoctor(curr);
                                    setOpenDoctor(false);
                                }}
                                className="p-2 hover:bg-blue-100 cursor-pointer rounded"
                            >
                                {curr}
                            </p>
                        ))}
                    </div>
                )}
            </div>
            <div className="relative flex-1">
                <div
                    onClick={() => {
                        setOpenLocation(!openLocation);
                        setOpenDoctor(false);
                    }}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <p><CiLocationOn className="w-[22px] h-[22px] border rounded-full border-blue-950 p-0.5" /></p>
                    <p>{selectedLocation}</p>
                    <p><RiArrowDropDownLine /></p>
                </div>
                {openLocation && (
                    <div className="absolute top-12 left-0 w-full bg-white shadow-xl border rounded-lg p-2 z-50">
                        {locations.map((curr) => (
                            <p
                                key={curr}
                                onClick={() => {
                                    setSelectedLocation(curr);
                                    setOpenLocation(false);
                                }}
                                className="p-2 hover:bg-blue-100 cursor-pointer rounded"
                            >
                                {curr}
                            </p>
                        ))}
                    </div>
                )}
            </div>
            <button className="bg-blue-600 h-12 w-12 rounded-full flex items-center justify-center text-white">
                <IoIosSearch className="w-[20px] h-[20px]" />
            </button>
        </>
    )
}