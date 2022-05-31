import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <div>
            <header className="text-gray-600 body-font bg-zinc-700">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img alt="content" className="h-10 w-10 " src="images/kodehack.png"/>
                    <span className="ml-3 text-xl text-white font-bold">Kodehack</span>
                    </p>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <p className="mr-5 text-white hover:text-amber-500 font-bold">DASHBOARD</p>
                    <p className="mr-5 text-white hover:text-amber-500 font-bold">BARANG</p>
                    <p className="mr-5 text-white hover:text-amber-500 font-bold">NOTA TRANSAKSI</p>
                    </nav>
                    <Link to='/'>
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </button>
                    </Link>
                </div>
            </header>
        </div>
        
    )
}
export default Navigation;