import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { moodChange } from '../../store/moodSlice.ts';
import type { RootState } from '../../store/store.ts';
import { MdOutlineDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { HiMenu, HiX } from 'react-icons/hi';

const NavigationBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const dispatch = useDispatch();
    const mood = useSelector((state: RootState) => state.appModeChange.appMood);
    const isOn = mood === true; // assuming true means dark mode on

    const handleToggle = () => {
        dispatch(moodChange(!mood));
    };

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/skills', label: 'Skills' },
        { to: '/projects', label: 'Projects' },
        { to: '/contact', label: 'Contact' },
    ];

    const getLinkClasses = (isActive: boolean) =>
        `block px-4 py-2 text-lg font-medium transition-colors ${
            isActive
                ? 'text-blue-600'
                : mood === false
                    ? 'text-gray-700 hover:text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
        }`;

    return (
        <nav
            className={`fixed top-0 z-50 w-full shadow-md px-6 py-4 transition-colors duration-300 ${
                mood === false ? 'bg-white' : 'bg-gray-900'
            }`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <button
                        className={`lg:hidden text-3xl text-gray-800 ${mood === false ? 'dark:text-gray-700' : 'dark:text-white'}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>

                    <div className="hidden lg:flex space-x-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) => getLinkClasses(isActive)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Theme toggle button */}
                <button
                    onClick={handleToggle}
                    aria-label={isOn ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    title={isOn ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    className="relative flex items-center w-14 h-8 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 dark:bg-gray-700">
                    <div
                        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300
                        ${isOn ? 'translate-x-6' : 'translate-x-0'}`}>
                    </div>

                    <span
                        className="absolute left-1 w-6 h-6 flex items-center justify-center text-xl text-gray-300"
                        style={{ pointerEvents: 'none' }}>
                        <CiLight />
                    </span>
                    <span
                        className="absolute right-1 w-6 h-6 flex items-center justify-center text-xl text-gray-800"
                        style={{ pointerEvents: 'none' }}>
                        <MdOutlineDarkMode />
                    </span>
                </button>
            </div>

            {menuOpen && (
                <div className="lg:hidden mt-4 space-y-2">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) => getLinkClasses(isActive)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default NavigationBar;
