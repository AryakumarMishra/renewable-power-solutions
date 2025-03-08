
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <img 
            src="/images/logo.png" 
            alt="Renewable Power Solutions Logo" 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="font-playfair text-6xl font-bold text-gray-900 mb-2">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
          <p className="text-gray-500 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center px-6 py-3 bg-gold hover:bg-gold-dark text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
