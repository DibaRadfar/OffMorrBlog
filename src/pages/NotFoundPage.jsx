import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 text-center bg-white rounded-lg shadow">
        <h1 className="mb-4 text-5xl font-bold text-gray-800">404</h1>
        <p className="mb-6 text-xl text-gray-600">صفحه مورد نظر یافت نشد</p>
        <Link 
          to="/" 
          className="inline-block px-6 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;