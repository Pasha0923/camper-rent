// import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { isFavorite } from "../../redux/selectors";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import css from "./CardCamper.module.css";
import icons from "../../assets/all-icons.svg";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";
const CardCamper = (adverts) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => isFavorite(state, adverts?._id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavorite = () => {
    if (favorite) {
      dispatch(removeFavorite(adverts));
    } else {
      dispatch(addFavorite(adverts));
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  if (!adverts || !adverts.gallery || adverts.gallery.length === 0) {
    return null;
  }

  return (
    <div className={css.wrap}>
      <img src={adverts.gallery[0]} alt="First Image" className={css.image} />
      <div className={css.infoWrap}>
        <div>
          <div className={css.headerWrap}>
            <h2 className={css.cardTitle}>{adverts.name}</h2>
            <div className={css.favoriteAction} onClick={toggleFavorite}>
              <p className={css.cardPrice}>€ {adverts.price.toFixed(2)}</p>
              <svg
                className={favorite ? css.favoriteIconActive : css.favoriteIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <g clipPath="url(#clip0_58_198)">
                  <path
                    d="M21.3401 4.60999C20.8294 4.099 20.2229 3.69364 19.5555 3.41708C18.888 3.14052 18.1726 2.99817 17.4501 2.99817C16.7276 2.99817 16.0122 3.14052 15.3448 3.41708C14.6773 3.69364 14.0709 4.099 13.5601 4.60999L12.5001 5.66999L11.4401 4.60999C10.4084 3.5783 9.00915 2.9987 7.55012 2.9987C6.09108 2.9987 4.69181 3.5783 3.66012 4.60999C2.62843 5.64169 2.04883 7.04096 2.04883 8.49999C2.04883 9.95903 2.62843 11.3583 3.66012 12.39L4.72012 13.45L12.5001 21.23L20.2801 13.45L21.3401 12.39C21.8511 11.8792 22.2565 11.2728 22.533 10.6053C22.8096 9.93789 22.9519 9.22248 22.9519 8.49999C22.9519 7.77751 22.8096 7.0621 22.533 6.39464C22.2565 5.72718 21.8511 5.12075 21.3401 4.60999Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_58_198">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className={css.ratingWrap}>
            <p className={css.cardRating}>
              {adverts.rating}
              <span>({adverts.reviews.length} Reviews)</span>
            </p>
            <p className={css.cardLocation}>{adverts.location}</p>
          </div>
        </div>
        <p className={css.cardDescription}>{adverts.description}</p>
        <div className={css.detailsCont}>
          {/* <div className={css.cardBox}> */}
          <p className={css.cardDetails}>
            {" "}
            <svg width="20" height="20" className={css.iconAdult}>
              <use href={`${icons}#icon-people`}></use>
            </svg>
            {adverts.adults} adults
          </p>
          {/* </div> */}
          <p className={css.cardDetails}>
            {" "}
            <svg width="20" height="20" className={css.iconAdult}>
              <use href={`${icons}#icon-engine`}></use>
            </svg>
            {adverts.transmission.charAt(0).toUpperCase() +
              adverts.transmission.slice(1)}
          </p>
          <p className={css.cardDetails}>
            {" "}
            <svg width="20" height="20" className={css.iconAdult}>
              <use href={`${icons}#icon-petrol`}></use>
            </svg>{" "}
            {adverts.engine.charAt(0).toUpperCase() + adverts.engine.slice(1)}
          </p>

          {adverts.details.kitchen && (
            <p className={css.cardDetails}>
              {" "}
              <svg width="20" height="20" className={css.iconAdult}>
                <use href={`${icons}#icon-kitchen`}></use>
              </svg>{" "}
              Kitchen
            </p>
          )}
          <p className={css.cardDetails}>
            {" "}
            <svg width="20" height="20" className={css.iconAdult}>
              <use href={`${icons}#icon-bed`}></use>
            </svg>
            {adverts.details.beds} beds
          </p>
          <p className={css.cardDetails}>
            {" "}
            <svg width="20" height="20" className={css.iconAdult}>
              <use href={`${icons}#icon-electro`}></use>
            </svg>
            {adverts.details.AC} AC
          </p>
        </div>

        <div>
          <Button onClick={openModal}>Show more</Button>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} adverts={adverts} />
      </div>
    </div>
  );
};

export default CardCamper;

// CardCamper.propTypes = {
//   name: PropTypes.string,
//   description: PropTypes.string,
//   rating: PropTypes.number,
//   reviews: PropTypes.array,
//   location: PropTypes.string,
//   price: PropTypes.number,
//   gallery: PropTypes.array,
// };
