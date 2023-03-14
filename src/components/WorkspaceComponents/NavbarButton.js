import React from 'react'

const NavbarButton = ({name}) => {
  return (
    <button className="flex justify-center items-center rounded-[50px] py-[0.5%] px-[1%] text-white cursor-pointer text-lg space-x-4 bg-button-color mt-[1%]">
        {/* <img
                className="w-[17px] mr-[13%]"
                src={icon}
                alt={`${name} icon`}
            /> */}
        <span className="m-0 text-sm font-light">{name}</span>
    </button>
  )
}

export default NavbarButton;