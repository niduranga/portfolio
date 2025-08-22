import React from 'react';
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import PublicLayout from "./layouts/publicLayout/publicLayout.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Project from "./components/Project.tsx";
import NotFound from "./components/NotFound.tsx";

const App :React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PublicLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="skills" element={<Skills/>}/>
                    <Route path="projects">
                        <Route index element={<Projects/>}/>
                        <Route path=":projectName" element={<Project/>}/>
                    </Route>

                    <Route path="contact" element={<Contact/>}/>
                </Route>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
    );
};

export default App;