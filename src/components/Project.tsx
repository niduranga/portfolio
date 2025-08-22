import React from 'react';
import { useParams } from 'react-router';
import { myProjects } from '../utilities/data-fields/myProjects.ts';
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

const Project: React.FC = () => {
    const { projectName } = useParams();
    const project = myProjects.find((p) => p.title === projectName);
    const mood = useSelector((state: RootState) => state.appModeChange.appMood)

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <h2 className="text-2xl font-semibold">Project not found</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-6 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className={`text-4xl font-bold text-center mb-8 mt-5 ${mood === false ?"text-gray-700" :"text-white"}`}>
                    {project.title}
                </h1>

                <img
                    src={project.image}
                    alt={project.title}
                    className="mx-auto w-full max-w-md rounded-xl shadow-2xl border border-gray-700 hover:scale-105 transition-transform duration-300"
                />

                <p className={`text-lg text-gray-300 mt-6 mb-8 text-center ${mood === false ?"text-gray-700" :"text-white"}`}>
                    {project.description}
                </p>

                <div className="flex justify-center">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
