import React from 'react';
import NavigationBar from "../../utilities/Navigation/NavigationBar.tsx";
import { Outlet } from "react-router";
import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";

const PublicLayout: React.FC = () => {
    const mood = useSelector((state: RootState) => state.appModeChange.appMood)
    return (
        <div className={`
        ${ mood === false ?"bg-white" :"bg-gray-900"}
        `}>
            <NavigationBar />
            <Outlet />
        </div>
    );
};

export default PublicLayout