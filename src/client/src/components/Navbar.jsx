import { a } from 'react-router-dom';
import React from 'react';
import logo from '../assets/img/jobstreet-logo.svg';

const Navbar = () => {
    return (
        <nav className="bg-black-700">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">

                    <a className="flex flex-shrink-0 items-center mr-4" href="/">
                        <img className="h-auto w-auto" src={logo} alt="React Jobs"/>
                        <span className="text-[#5a6881] text-sm font-light ml-10 hover:font-bold">
                            Jobs search
                        </span>
                        <span className="text-[#5a6881] text-sm font-light ml-10">
                            Profile
                        </span>
                        <span className="text-[#5a6881] text-sm font-light ml-10">
                            Career advice
                        </span>
                        <span className="text-[#5a6881] text-sm font-light ml-10">
                            Company profiles
                        </span>
                    </a>

                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <button className='border-2 border-violet-500 px-3 py-1 rounded-lg text-[#1e47a9] hover:bg-sky-200 font-semibold'>
                                    Sign in
                                </button>
                                <a to="/jobs" className='text-[#1e47a9] font-bold font-semibold rounded-md px-3 py-2'>
                                    Employer Site
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar