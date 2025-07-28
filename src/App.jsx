import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Blog/Header/Header.jsx";
import Footer from "./components/Blog/Footer/Footer.jsx";

// Import تمام صفحات
import HomePage from "./pages/Blog/HomePage.jsx";
import ArticlePage from "./pages/Blog/ArticlePage.jsx";
import CategoryPage from "./pages/Blog/CategoryPage.jsx";
import SearchResultsPage from "./pages/Blog/SearchResultsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Paymentfailedpage from "./pages/payment/PaymentFailedPage/Paymentfailedpage.jsx";
import PaymentSuccesspage  from "./pages/payment/PaymentFailedPage/PaymentSuccesspage.jsx";

function App() {
  return (
    <Router>
      <div className="app rtl" dir="rtl">
        {/* هدر سایت */}
        <Header />
        
        {/* محتوای اصلی */}
        <main className="min-h-[calc(100vh-10rem)] bg-gray-50 p-4">
          <Routes>
            {/* صفحه اصلی */}
            <Route path="/" element={<HomePage />} />
            
            {/* صفحه مقاله */}
            <Route path="/articles/:id" element={<ArticlePage />} />
            
            {/* صفحه دسته‌بندی */}
            <Route path="/categories/:slug" element={<CategoryPage />} />
            
            {/* صفحه نتایج جستجو */}
            <Route path="/search" element={<SearchResultsPage />} />
            
            {/* payment-failed */}
            <Route path="/payment-failed" element={<Paymentfailedpage />} />

            {/* payment-success */}
            <Route path="/payment-success" element={<PaymentSuccesspage/>}/>
            
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