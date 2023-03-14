import React from "react";
import BackgroundImage from "../../assets/workspaceBg.png";
import Button from "./Button";

const Right = () => {
    return(
        <>
        <div className="relative">
            <img src={BackgroundImage} alt="..." className="w-1/2 h-screen"/>
            <button className="flex justify-center items-center rounded-[50px] py-[0.5%] px-[1%] text-white cursor-pointer text-lg space-x-4 bg-button-color mt-[1%] relative">
        {/* <img
                className="w-[17px] mr-[13%]"
                src={icon}
                alt={`${name} icon`}
            /> */}
        <span className="m-0 text-sm font-light">ashar</span>
    </button>
            </div>
        </>
    )
}

export default Right;