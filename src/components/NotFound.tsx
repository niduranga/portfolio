import React from 'react';
import { Link } from 'react-router';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-gray-400 mb-6">
                Sorry, the page you're looking for doesn't exist or has been moved.
            </p>

            <Link
                to="/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;