import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const NavBar = () => {
    const navItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
   
    </>
    return (
        <div className="bg-base-100 mb-4 h-28 navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm">
                            {navItems}
                       
                    </ul>
                </div>
                <Link to="/" className="text-xl btn btn-ghost">
                <img src={logo} alt="" />
                </Link>
            </div>
            <div className="lg:flex hidden navbar-center">
                <ul className="px-1 menu menu-horizontal">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline btn-secondary">Appoinment</button>
            </div>
        </div>
    );
};

export default NavBar;