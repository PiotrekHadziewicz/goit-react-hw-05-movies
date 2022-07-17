import { useState, useEffect } from 'react';
import { finderInstance } from 'api/client';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line
import { Loader } from 'components/Loader';

const Reviews = () => {
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [reviewsDetails, setReviewsDetails] = useState([]);
  const { movieId } = useParams();

  const getReviewsDetailsResponse = async () => {
    setIsLoading(true);
    try {
      const response = await finderInstance.get(
        `movie/${movieId}/reviews?api_key=b44664f7e0740398ed834dca0818b840&language=en-US`
      );
      setReviewsDetails(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getReviewsDetailsResponse();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {reviewsDetails.length > 0 ? (
        <ul>
          {reviewsDetails.map(reviewsDetail => (
            <li className={''} key={reviewsDetail.id}>
              <h4>Author: {reviewsDetail.author}</h4>
              <p>{reviewsDetail.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nothing to show</p>
      )}

      {/* {isLoading && <Loader type="spokes" color="#3f72b5" />} */}
    </>
  );
};


export default Reviews;