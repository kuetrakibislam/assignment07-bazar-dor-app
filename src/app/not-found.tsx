import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
            <h1>Page Not Found (404) </h1>
            <p>পেজ খুঁজে পাওয়া যায়নি</p>
            <div className="my-14 flex items-center justify-center">
                <Link href="/"> 
                   <h1 className='text-green-500 hover:text-green-700 text-3xl'>← হোম পেজে ফিরে যান</h1>
                </Link>
            </div>
            
        </div>
    );
};

export default NotFoundPage;