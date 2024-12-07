import React, { useEffect, useState } from "react";
import Card from "./Card";

const NewsApp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = import.meta.env.VITE_NEWS_API;

  const fetchNews = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await res.json();
    console.log(jsonData.articles);

    let sliceData = jsonData.articles.slice(0, 10);
    setNewsData(sliceData);
  };
  useEffect(() => {
    fetchNews();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-col items-center py-6 bg-blue-200">
        <h1 className="text-3xl font-bold text-black mb-4 uppercase">
          Abhi's News App
        </h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
            className="w-80 p-2 border rounded-lg text-lg"
          />
          <button
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100"
            onClick={fetchNews}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-6 space-x-2">
        {["sports", "politics", "entertainment", "health", "fitness"].map(
          (category) => (
            <button
              key={category}
              onClick={userInput}
              value={category}
              className="bg-blue-500  text-white px-5 py-3 mb-1 rounded-3xl hover:bg-blue-700"
            >
              {category.toUpperCase()}
            </button>
          )
        )}
      </div>

      <div className="mt-6">
        {newsData ? (
          <Card data={newsData} />
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default NewsApp;
