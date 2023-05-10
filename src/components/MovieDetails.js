import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function MovieDetails() {
  const location = useLocation();
  const [id, setId] = useState();
  const [movieData, setMovieData] = useState();
  const [isRendering, setIsRendering] = useState(false);

  const getInfo = async () => {
    try {
      const fetchData = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b88f027e2aeff2a8f14c809189a98dd0&language=en-US`
      );

      const data = fetchData.data;
      console.log(data);
      setMovieData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setId(searchParams.get("id") || "");
    // getInfo();
  }, [location]);

  useEffect(() => {
    getInfo();
  }, [id]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsRendering(true);
    }, 700);

    return () => clearTimeout(delay);
  }, []);

  if (!isRendering) {
    return null;
  }

  return (
    <div className="bg-[#242B2E] text-gray-300 h-[100vh]">
      <div className="p-3">
        <img
          className="w-full h-[300px] rounded-md"
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieData.poster_path}`}
          alt="movie poster"
          title="movie poster"
        />
        <div>
          <p className="font-semibold text-3xl pt-2 text-[#ffffff]">
            {movieData.original_title}
          </p>
          <p className="pt-2 text-[#758283]">{movieData.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
