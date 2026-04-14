import React from 'react';
import HeroSection from '../hero/HeroSection';
import { Outlet } from 'react-router';
import Users from '../users/Users';

const Home = () => {
    return (
        <div>
            <main className="min-h-screen container mx-auto text-center bg-base-200">
                <HeroSection></HeroSection>
                <Users></Users>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Home;