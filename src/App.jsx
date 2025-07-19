import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Import تمام صفحات
import HomePage from "./pages/HomePage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <Router>
      <div className="app rtl" dir="rtl">
        {/* هدر سایت */}
        <Header />
        
        {/* محتوای اصلی */}
        <main className="min-h-[calc(100vh-160px)] bg-gray-50 p-4">
          <Routes>
            {/* صفحه اصلی */}
            <Route path="/" element={<HomePage />} />
            
            {/* صفحه مقاله */}
            <Route path="/articles/:id" element={<ArticlePage />} />
            
            {/* صفحه دسته‌بندی */}
            <Route path="/categories/:slug" element={<CategoryPage />} />
            
            {/* صفحه نتایج جستجو */}
            <Route path="/search" element={<SearchResultsPage />} />
            
            {/* صفحه 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        
        {/* فوتر سایت */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;