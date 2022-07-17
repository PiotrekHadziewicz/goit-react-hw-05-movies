import { useState, useEffect } from 'react';
import { finderInstance } from 'api/client';
import { Link } from 'react-router-dom';
import { saveLocalStorage, loadLocalStorage } from 'api/localStorage';
import { Loader } from 'components/Loader';
import styles from '../styles/MoviesPage.module.css';

const MoviesPage = () => {
  const [lookingValue, setLookingValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const handleChange = event => {
    event.preventDefault();
    setLookingValue(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await finderInstance.get(
        `search/movie?api_key=b44664f7e0740398ed834dca0818b840&language=en-US&query=${lookingValue}&page=1&include_adult=false`
      );
      setSearchResults(response.data.results);
      saveLocalStorage('searchResults', response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   saveInLocalStorage('searchResults', searchResults);
  // }, [searchResults]);

  useEffect(() => {
    const storageArray = loadLocalStorage('searchResults');
    if (storageArray) {
      setSearchResults(storageArray);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <header className={''}>
        <form className={''} onSubmit={handleSubmit}>
          <button type="submit" className={styles.MoviesPage_btn}>
            <span className={''}>Search</span>
          </button>

          <input
            value={lookingValue}
            onChange={handleChange}
            className={styles.MoviesPage_search}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </form>
      </header>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map(searchResult => (
            <li className={styles.MoviesPage_list} key={searchResult.id}>
              <Link
                to={`/movies/${searchResult.id}`}
                className={styles.MoviesPage_list}
              >
                {searchResult.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <Loader color="#3f51b5" />}
    </>
  );
};

export default MoviesPage;
