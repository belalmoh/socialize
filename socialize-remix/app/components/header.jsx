import { Link } from 'remix';

import {CgInfinity} from 'react-icons/cg';

import Dropdown from './dropdown';

const Header = () => {
    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-4 py-4 lg:flex lg:justify-between lg:items-center">
                <div className="lg:flex lg:items-center">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to="/">
                                <CgInfinity />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">

                        <div className="relative mt-4 lg:mt-0 lg:mx-4">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </span>

                            <input type="text" className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600" placeholder="Search" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                    <Dropdown />
                </div>
            </div>
        </nav>
    )
};

export default Header;