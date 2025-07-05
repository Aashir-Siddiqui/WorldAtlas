import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "../lib/utils";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar({ className }) {
    const [active, setActive] = useState(null);
    return (
        <nav className={cn("fixed top-10 inset-x-0 max-w-2xl mx-5 z-50 md:mx-auto", className)}>
            <Menu setActive={setActive}>
                <div className=" flex items-center justify-between gap-6 md:gap-10">
                    <NavLink to="/">
                        <MenuItem setActive={setActive} active={active} item="Home" />
                    </NavLink>
                    <NavLink to="/about">
                        <MenuItem setActive={setActive} active={active} item="About" />
                    </NavLink>
                    <NavLink to="/country">
                        <MenuItem setActive={setActive} active={active} item="Country" />
                    </NavLink>
                    <NavLink to="/contact">
                        <MenuItem setActive={setActive} active={active} item="Contact" />
                    </NavLink>
                </div>
            </Menu>
        </nav>
    );
}