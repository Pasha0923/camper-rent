import css from "./Reviews.module.css";
import Form from "../ModalForm/ModalForm";
import PropTypes from "prop-types";
// import StarIcon from "../../assets/star.svg";
import Iconsvg from "../../Icon/Icon";
const getFirslLetterName = (name) => {
  const initials = name.trim().charAt(0).toUpperCase();
  return (
    <div className={css.avatar}>
      <span>{initials}</span>
    </div>
  );
};

const Reviews = ({ reviews }) => (
  <div className={css.reviewsContainer}>
    <div className={css.reviews}>
      {reviews.map((review, index) => (
        <div key={index}>
          <div className={css.reviewHeader}>
            {getFirslLetterName(review.reviewer_name)}
            <div className={css.reviewRating}>
              <h3 className={css.reviewName}>{review.reviewer_name}</h3>
              <div className={css.starRating}>
                {/* Генерация звезд в зависимости от рейтинга */}
                {[...Array(review.reviewer_rating)].map((_, i) => (
                  <Iconsvg key={i} iconName="rating" className={css.starIcon} />
                ))}
              </div>
            </div>
          </div>
          <div className={css.reviewContent}>
            <p>{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
    <Form />
  </div>
);
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer_name: PropTypes.string.isRequired,
      reviewer_rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Reviews;
