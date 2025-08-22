import React from 'react';
import myImag from '../assets/img.png'
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

const Home: React.FC = () => {
    const mood = useSelector((state: RootState) => state.appModeChange.appMood)

    return (
        <div className="min-h-screen text-white flex items-center justify-center px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl w-full">
                <div className="space-y-6">
                    <h1 className={` text-4xl md:text-6xl font-extrabold leading-tight animate-fade-in ${mood === false ?"text-gray-700" :"text-gray-300"} `}>
                        Hi, I’m <span className="text-teal-500">Niduranga Jayarathna</span>
                    </h1>
                    <h2 className={`text-xl md:text-2xl font-medium text-gray-300 ${mood === false ?"text-gray-700" :"text-gray-300"}`}>
                        BSc (Hons) Software Engineering Undergraduate, BCI Campus
                    </h2>
                    <p className={`text-lg leading-relaxed ${mood === false ?"text-gray-700" :"text-gray-400"}`}>
                        I build fast, modern web apps with <span
                        className={`font-semibold ${mood === false ?"text-gray-700" :"text-white"}`}>React</span>,
                        <span className={`font-semibold ${mood === false ?"text-gray-700" :"text-white"}`}>React Native</span>, <span
                        className={`font-semibold ${mood === false ?"text-gray-700" :"text-white"}`}>Node.js</span>, <span
                        className={`font-semibold ${mood === false ?"text-gray-700" :"text-white"}`}>PHP</span>, <span
                        className={`font-semibold ${mood === false ?"text-gray-700" :"text-white"}`}>Laravel</span>, and <span
                        className={`font-semibold ${mood === false ?"text-gray-700" :"text-white"}`}>Tailwind CSS</span>. I’m passionate about clean code and
                        great design.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <a
                            href="https://github.com/niduranga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-md bg-gray-700 hover:bg-gray-600 transition"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img
                        src={myImag}
                        alt="Niduranga Jayarathna"
                        className="w-98 h-98 object-cover rounded-full shadow-lg border-4 border-teal-400 animate-fade-in"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
