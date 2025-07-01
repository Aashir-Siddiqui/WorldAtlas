import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4 justify-center">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/country"
                        className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}
                    >
                        Country
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}