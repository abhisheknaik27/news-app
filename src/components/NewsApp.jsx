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
    <div className="">
      <div>
        <input
          type="text"
          placeholder="Search News"
          value={search}
          onChange={handleInput}
        />
        <button onClick={fetchNews}>Search</button>
      </div>

      <div className="">
        <button onClick={userInput} value={"sports"}>
          Sports
        </button>
        <button onClick={userInput} value={"politics"}>
          Politics
        </button>
        <button onClick={userInput} value={"entertainment"}>
          Entertainment
        </button>
        <button onClick={userInput} value={"health"}>
          Health
        </button>
        <button onClick={userInput} value={"fitness"}>
          Fitness
        </button>
      </div>

      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
};

export default NewsApp;
