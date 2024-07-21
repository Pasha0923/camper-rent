import { useSelector } from "react-redux";
import css from "./Favorites.module.css";
import { selectFavorites } from "../../redux/favorites/selectors";
import CardCamper from "../CardCamper/CardCamper";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={css.wrap}>
      <div className={css.infoWrap}>
        {favorites.length === 0 ? (
          <p>No favorites selected yet</p>
        ) : (
          favorites.map((adverts) => (
            <CardCamper key={adverts._id} adverts={adverts} />
          ))
        )}
        <Link to="/catalog" className={css.backToCatalog}>
          Back to Catalog
        </Link>
      </div>
    </div>
  );
};

export default Favorites;
