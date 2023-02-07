import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'

const NavBar = () => {
  return (
    <>

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <Link to="/" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">up2Date</span>
        </Link>
        <div className="flex items-center">
            {/* <Link to="/" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555) 412-1234</Link> */}
            <Link to='/' className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <Link to='/' className="text-gray-900 dark:text-white hover:underline" aria-current="page">Movies</Link>
                </li>
                <li>
                    <Link to='/' className="text-gray-900 dark:text-white hover:underline">Sports</Link>
                </li>
                <li>
                    <Link to='/' className="text-gray-900 dark:text-white hover:underline"> Facts</Link>
                </li>
                <li>
                    <Link to='/' className="text-gray-900 dark:text-white hover:underline">Entertainment</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>


    </>
  )
}

export default NavBar