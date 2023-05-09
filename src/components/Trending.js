import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Trending() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getInfo = async () => {
    try {
      const fetchData = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=b88f027e2aeff2a8f14c809189a98dd0`
      );
      const data = await fetchData.data.results;
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % data.length);
    }, 5000); // 2000ms = 2s

    return () => clearInterval(intervalId);
  }, [data]);

  const currentImage =
    "https://image.tmdb.org/t/p/w220_and_h330_face" +
    data[currentIndex]?.poster_path;

  return (
    <>
      <Link to="/moviedetails">
        <img className="w-full rounded-xl p-5" src={currentImage} alt="image" />
      </Link>
    </>
  );
}

export default Trending;
