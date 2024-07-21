import { useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import css from "./Modal.module.css";
import Reviews from "../Reviews/Reviews";
import PropTypes from "prop-types";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
const Modal = ({ isOpen, onClose, adverts }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const closeModal = () => {
    navigate(`/catalog`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={css.modalBackdrop} onClick={closeModal}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={css.modalClose} onClick={closeModal}>
          ×
        </button>
        <h2 className={css.modalTitle}>{adverts.name}</h2>
        <div className={css.ratingCont}>
          <p className={css.modalRating}>
            {adverts.rating}
            <span>({adverts.reviews.length} Reviews)</span>
          </p>
          <p className={css.modalLocation}>{adverts.location}</p>
        </div>
        <p className={css.modalPrice}>€ {adverts.price.toFixed(2)}</p>
        <div className={css.gallery}>
          {adverts.gallery.map((image, index) => (
            <img key={index} src={image} alt={`camper gallery ${index + 1}`} />
          ))}
        </div>
        <p className={css.modalDescr}>{adverts.description}</p>
        <div className={css.tabs}>
          <Link
            to={`${adverts._id}/features`}
            className={
              location.pathname.includes("features")
                ? css.activeTab
                : css.inactiveTab
            }
          >
            Features
          </Link>
          <Link
            to={`${adverts._id}/reviews`}
            className={
              location.pathname.includes("reviews")
                ? css.activeTab
                : css.inactiveTab
            }
          >
            Reviews
          </Link>
        </div>
        <Routes>
          <Route
            path={`${adverts._id}/features`}
            element={<FeaturesItem adverts={adverts} />}
          />
          <Route
            path={`${adverts._id}/reviews`}
            element={<Reviews reviews={adverts.reviews} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  customStyles: PropTypes.object,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  onClose: PropTypes.func,
  adverts: PropTypes.string,
};
