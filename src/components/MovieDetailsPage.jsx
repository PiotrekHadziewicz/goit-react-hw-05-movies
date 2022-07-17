import { useState, useEffect } from 'react';
import { finderInstance } from 'api/client';
import { useParams, Outlet, Link, useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader';
import styles from '../styles/MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieYear, setMovieYear] = useState('');
  const { movieId } = useParams();

  let navigate = useNavigate();

  const getMovieDetailsResponse = async () => {
    setIsLoading(true);
    try {
      const response = await finderInstance.get(
        `movie/${movieId}?api_key=b44664f7e0740398ed834dca0818b840&language=en-US`
      );
      setMovieDetails(response.data);
      setMovieGenres(response.data.genres);
      console.log(response.data);
      setMovieYear(response.data.release_date);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetailsResponse();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={styles.MovieDetailsPage_btn}
      >
        Go back
      </button>
      {isLoading && <Loader color="#3f51b5" />}
      <img
        src={`
            https://image.tmdb.org/t/p/w200${movieDetails.poster_path}
        `}
        alt={movieDetails.original_title}
        className={styles.MovieDetailsPage_poster}
      ></img>
      <div>
        <h1>
          {movieDetails.original_title}({movieYear})
        </h1>
        <p>User score: {movieDetails.vote_average * 10}%</p>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        {movieGenres.map(genre => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </div>
      <hr></hr>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li key="cast" className={styles.Cast_list}>
            <Link to={`/movies/${movieId}/cast`} className={styles.Cast_list}>
              Cast
            </Link>
          </li>
          <li key="reviews" className={styles.Cast_list}>
            <Link
              to={`/movies/${movieId}/reviews`}
              className={styles.Cast_list}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;