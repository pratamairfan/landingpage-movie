import React, { useState, useEffect } from "react";

import Hero from "../components/Hero";
import NowPlaying from "../components/NowPlaying";
import UpComing from "../components/UpComing";
import Popular from "../components/Popular";

import { searchMovie, getMovieListUpComing } from "../apimovie";
import Header from "../components/header";
import Footer from "../components/Footer";

const Home = () => {
  const baseIMGURL = import.meta.env.VITE_REACT_APP_BASEIMGURL;
  const [upComing, setUpComing] = useState([]);

  useEffect(() => {
    getMovieListUpComing().then((result) => {
      setUpComing(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setUpComing(query.results);
    }
  };

  const movies = () => {
    return (
      upComing &&
      upComing.map((movie, index) => {
        return (
          <>
            <div key={index}>
              <div className="pl-7">
                <figure className="w-52 rounded-box hover:bg-neutral-800 hover:opacity-50">
                  <img src={`${baseIMGURL}/${movie.poster_path}`} className="rounded-box" />
                </figure>
                <div className="data-post">
                  <h3 className="title">{movie.title}</h3>
                  <span className="date">{new Date(movie.release_date).getFullYear()}</span>
                </div>
              </div>
            </div>
          </>
        );
      })
    );
  };

  return (
    <div>
      <Header movies={movies()} search={search} />
      <Hero />
      <Popular />
      <NowPlaying />
      <UpComing movies={movies()} />
      <Footer />
    </div>
  );
};

export default Home;
