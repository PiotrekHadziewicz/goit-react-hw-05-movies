import { useState, useEffect } from 'react';
import { finderInstance } from 'api/client';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader';
import styles from '../styles/Cast.module.css';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [castDetails, setCastDetails] = useState([]);
  const { movieId } = useParams();
  const getCastDetailsResponse = async () => {
    setIsLoading(true);
    try {
      const response = await finderInstance.get(
        `movie/${movieId}/credits?api_key=b44664f7e0740398ed834dca0818b840&language=en-US`
      );
      setCastDetails(response.data.cast);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCastDetailsResponse();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ul className={styles.Cast_container}>
        {castDetails.map(castDetail => (
          <li className={styles.Cast_elem} key={castDetail.credit_id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${castDetail.profile_path}`}
              alt={castDetail.name}
            />
            <div>
              <p>Name: {castDetail.name}</p>
              <p>Character: {castDetail.character}</p>
            </div>
          </li>
        ))}
      </ul>
      {isLoading && <Loader color="#3f51b5" />}
    </>
  );
};

export default Cast;