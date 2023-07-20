import React, { useEffect, useState } from "react";

import { getMovieListNowPlaying } from "../apimovie";
const NowPlaying = () => {
  const baseIMGURL = import.meta.env.VITE_REACT_APP_BASEIMGURL;

  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);

  useEffect(() => {
    getMovieListNowPlaying().then((result) => {
      setNowPlayingMovie(result);
    });
  }, []);

  const movieListNowPlaying = () => {
    return nowPlayingMovie.map((movie, index) => {
      return (
        <>
          <div key={index} className="poster">
            <figure className="w-40 rounded-box hover:bg-neutral-800 hover:opacity-50">
              <img src={`${baseIMGURL}/${movie.poster_path}`} className="rounded-box" />
            </figure>
            <div className="data-post">
              <h3 className="title">{movie.title}</h3>
              <span className="date">{new Date(movie.release_date).getFullYear()}</span>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <section className="containers">
        <div className="border-l-[5px] border-solid border-red-700 pl-[10px]">
          <h1 className="text-3xl my-3">Now Playing</h1>
        </div>
        <div className="post-popular">{movieListNowPlaying()}</div>
      </section>
    </>
  );
};

export default NowPlaying;
