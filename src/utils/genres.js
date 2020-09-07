const API_KEY = "0cb3589b6002b7759cab5cbf92e83b99";

const genres = [
  {
    id: 1,
    title: "Netflix Originals",
    url: `/trending/tv/week?api_key=${API_KEY}&with_networks=213`,
  },
  {
    id: 2,
    title: "Trending Now",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    id: 3,
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    id: 4,
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    id: 5,
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    id: 6,
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  // {
  //   id: 7,
  //   title: "Documentaries",
  //   url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  // },
  {
    id: 8,
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
];

export default genres;
