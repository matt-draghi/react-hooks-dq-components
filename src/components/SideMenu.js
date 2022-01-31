import React from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import Search from "./Search";

function SideMenu() {
  return (
    <aside className="side-bar open">{/* What components go here? - 
      Logo
      Menu Links
      Search
     */}
     <Logo/>
     <MenuLinks/>
     <Search/>
     </aside>
  );
}

export default SideMenu;
