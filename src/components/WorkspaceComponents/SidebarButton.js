const SidebarButton = ({name}) => {
    return (
        <button className="flex justify-center items-center rounded-[4px] py-[10%] px-[15%] text-white cursor-pointer text-lg border-2 space-x-8 border-r-4 border-b-4 border-button-color">
        {/* <img
                className="w-[17px] mr-[13%]"
                src={icon}
                alt={`${name} icon`}
            /> */}
        <span className="m-0 text-sm font-light">{name}</span>
    </button>
    )
}

export default SidebarButton;