import React, { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import ItemsCarousel from "react-items-carousel";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import useWindowSize from "../../../utils/windowSize";
import { toast } from "react-toastify";
import "./Row.css";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, url }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeMovie, setActiveMovie] = useState({ id: "" });
  const windowWidth = useWindowSize().width;
  const chevronWidth = 40;

  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 1,
    },
  };

  const notifyError = () =>
    toast.error("Sorry, this trailer is not available...");

  const getPath = (poster, backdrop) => {
    return title === "Netflix Originals" ? poster : backdrop;
  };

  const getNumberOfCards = () => {
    if (windowWidth > 2150) return 8;
    if (windowWidth > 1700) return 7;
    if (windowWidth > 1200) return 5;
    if (windowWidth > 700) return 3;
    return 2;
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      setActiveMovie({ id: "" });
    } else {
      setActiveMovie({ id: movie.id, isActive: true });
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "", {
        id: true,
      })
        .then((res) => {
          setTrailerUrl(res);
        })
        .catch((e) => {
          notifyError();
          console.log(e);
        });
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(url);
        setMovies(data.results);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [url]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={getNumberOfCards()}
          gutter={4}
          slidesToScroll={3}
          infiniteLoop
          leftChevron={
            <button className="btn btn-carousel">
              <FaChevronLeft />
            </button>
          }
          rightChevron={
            <button className="btn btn-carousel">
              <FaChevronRight />
            </button>
          }
          chevronWidth={chevronWidth}
          classes={{
            rightChevronWrapper: "chevronWrapper",
            leftChevronWrapper: "chevronWrapper",
            itemWrapper: "itemWrapper",
          }}
        >
          {movies.map((movie) => (
            <div
              className={`row__img-wrapper ${
                activeMovie.id === movie.id ? "active-movie" : ""
              }`}
              key={movie.id}
            >
              <img
                src={`${BASE_URL}${getPath(
                  movie.poster_path,
                  movie.backdrop_path
                )}`}
                alt={movie.name}
                className="row__poster"
                onError={(e) => (e.target.style.display = "none")}
                onClick={() => handleClick(movie)}
              />
              <FaPlay
                className="icon icon-play"
                onClick={() => handleClick(movie)}
              />
            </div>
          ))}
        </ItemsCarousel>
      </div>
      {trailerUrl && (
        <Youtube videoId={trailerUrl} opts={opts} className="youtube" />
      )}
    </div>
  );
}
