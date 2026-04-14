import React from 'react';
import HeroSection from '../hero/HeroSection';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <main className="min-h-screen bg-base-200">
                <HeroSection></HeroSection>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Home;