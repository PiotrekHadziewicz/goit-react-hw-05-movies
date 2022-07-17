import { useState, useEffect } from 'react';
import { finderInstance } from 'api/client';
import { Link } from 'react-router-dom';
import { Loader } from 'components/Loader';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [trending, setTrending] = useState([]);
  const getTrendingResponse = async () => {
    setIsLoading(true);
    try {
      const response = await finderInstance.get(
        `trending/movie/day?api_key=b44664f7e0740398ed834dca0818b840`
      );
      setTrending(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTrendingResponse();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {trending.map(trend => (
          <li className={styles.HomePage} key={trend.id}>
            <Link to={`/movies/${trend.id}`} className={styles.HomePage}>
              {trend.original_title}
            </Link>
          </li>
        ))}
      </ul>
      {isLoading && <Loader color="#3f51b5" />}
    </>
  );
}

export default HomePage;