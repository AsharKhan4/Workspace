import React from "react";
import NavbarButton from "../components/WorkspaceComponents/NavbarButton";
import SidebarButton from "../components/WorkspaceComponents/SidebarButton";
import BackgroundImage from "../assets/workspaceBg.png";

const Workspace = () => {
  return (
    <div className="flex justify-between">
      {/* Sidebar */}
      <div className="space-y-2 ml-2 mt-2">
        <div className="text-2xl font-semibold text-white">Globals</div>
        <SidebarButton name="name" />
        <SidebarButton name="name" />
        <SidebarButton name="name" />
        <SidebarButton name="name" />
        <SidebarButton name="name" />
        <SidebarButton name="name" />
        <SidebarButton name="name" />
        <SidebarButton name="name" />
        <div className="text-2xl font-semibold text-white">Layers</div>
        <SidebarButton name="name" />
        <SidebarButton name="name" />
        <SidebarButton name="name" />
        <SidebarButton name="name" />
        <SidebarButton name="name" />
        <SidebarButton name="name" />
      </div>
      {/* mid */}
      {/* right */}
      <div className="relative">
        <img src={BackgroundImage} alt="..." className="h-screen w-[40rem]" />
      </div>
    </div>
  )
}

export default Workspace;