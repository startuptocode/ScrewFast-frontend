import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import Navigationbar from './Navbar';

const Layout: React.FC = () => {
    return (
        <div className="light flex flex-col h-screen">
            {/* Navbar for tablet or smaller screens */}
            <div className="md:hidden">
                <Navigationbar />
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar for desktop */}
                <div className="hidden md:block">
                    <Sidebar />
                </div>

                <main className="flex-1 bg-default-50 flex flex-col ">
                    <header className=' md:flex justify-end'>
                        <Header />
                    </header>
                    <div className="flex-1 overflow-hidden">
                        <Outlet />
                    </div>

                    {/* Footer only visible on desktop */}
                    <footer className="hidden md:block justify-center">
                        <Footer />
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default Layout;