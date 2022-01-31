import React from "react";
import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";
import MainContent from "./MainContent";

function App() {
  return <div className="app-container">{/* What components go here?
    Side Menu
    Top Menu
    Main Content
    */}
    <TopMenu/>
    <SideMenu/>
    <MainContent/>
    </div>;
}

export default App;
