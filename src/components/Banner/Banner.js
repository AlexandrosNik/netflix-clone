import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import genres from "../../utils/genres";
import { ToastContainer, toast } from "react-toastify";
import { IoMdPlay } from "react-icons/io";
import { FiInfo } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import "./Banner.css";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(genres[0].url);
        setMovie(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
        );
      } catch (e) {}
    }

    fetchData();
  }, []);

  const notify = () => {
    toast.success("This is an awesome movie!");
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center top",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="btn banner__button banner__button--play">
            <IoMdPlay className="icon icon-play--small" />
            Play
          </button>
          <button
            className="btn banner__button banner__button--myList"
            onClick={notify}
          >
            <FiInfo className="icon icon-info" />
            More Info
          </button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner--fadeBottom" />
      <ToastContainer autoClose={2500} />
    </header>
  );
}
