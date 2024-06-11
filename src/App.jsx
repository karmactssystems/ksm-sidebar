import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSidebar from "./components/MainSidebar";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
function App() {

  return (
    <>
  
   
        <Router>
            <div className="flex">
      <MainSidebar/>
        {/* <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" alert />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
          <SidebarItem icon={<StickyNote size={20} />} text="Projects" alert />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar> */}


         
                <Routes>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Projects" element={<Projects />} />
                    {/* <Route path="/performance" element={<Performance />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/transactions" element={<Transactions />} /> */}
                </Routes>
            </div>
        </Router>




    </>
  )
}

export default App
