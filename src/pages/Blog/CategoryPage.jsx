import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { slug } = useParams();
  

  const categoryPosts = [
    { id: 1, title: "مقاله اول در این دسته" },
    { id: 2, title: "مقاله دوم در این دسته" }
  ];

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">مقالات دسته: {slug}</h1>
      
      <ul className="space-y-4">
        {categoryPosts.map(post => (
          <li key={post.id}>
            <Link 
              to={`/articles/${post.id}`}
              className="block p-4 transition bg-white rounded-lg shadow hover:bg-gray-50"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;