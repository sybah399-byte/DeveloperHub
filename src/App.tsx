import "./App.css";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Automation from "./pages/Automation";
import Terminal from "./pages/Terminal";
import Git from "./pages/Git";
import AI from "./pages/AI";
import Settings from "./pages/Settings";


function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route element={<MainLayout />}>

                    <Route path="/" element={<Dashboard />} />

                    <Route path="/projects" element={<Projects />} />

                    <Route path="/automation" element={<Automation />} />

                    <Route path="/terminal" element={<Terminal />} />

                    <Route path="/git" element={<Git />} />

                    <Route path="/ai" element={<AI />} />

                    <Route path="/settings" element={<Settings />} />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}


export default App;