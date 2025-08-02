import React from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  

  const searchResults = [
    { id: 1, title: "نتیجه جستجو اول برای " + query },
    { id: 2, title: "نتیجه جستجو دوم برای " + query }
  ];

  return (
    <div className="max-w-full px-4 py-8 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">نتایج جستجو برای: {query}</h1>
      
      {searchResults.length > 0 ? (
        <ul className="space-y-4">
          {searchResults.map(result => (
            <li key={result.id}>
              <Link 
                to={`/articles/${result.id}`}
                className="block p-4 transition bg-white rounded-lg shadow hover:bg-gray-50"
              >
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-12 text-center text-gray-500">نتیجه‌ای یافت نشد</p>
      )}
    </div>
  );
};

export default SearchResultsPage;