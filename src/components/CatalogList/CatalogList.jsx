import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/operations";
import { selectAllAdverts } from "../../redux/selectors";
import CardCamper from "../CardCamper/CardCamper";
import Modal from "../Modal/Modal";
import Filter from "../Filter/Filter";
import css from "./CatalogList.module.css";

const CatalogList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAllAdverts);
  const isLoading = useSelector((state) => state.adverts.isLoading);
  const isError = useSelector((state) => state.adverts.isError);
  const [selectedAd, setSelectedAd] = useState(null);
  const [filters, setFilters] = useState({
    location: "",
    equipment: [],
    type: "",
  });
  const [filteredAds, setFilteredAds] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  useEffect(() => {
    dispatch(fetchAdverts(1));
  }, [dispatch]);

  useEffect(() => {
    setFilteredAds(adverts);
  }, [adverts]);

  const loadMore = () => {
    dispatch(fetchAdverts(adverts.length / 4 + 1));
  };

  const handleCardClick = (adverts) => {
    setSelectedAd(adverts);
  };

  const handleCloseModal = () => {
    setSelectedAd(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setShowNoResults(false);
    setFilteredAds(adverts);
  };

  const handleSearch = () => {
    const result = adverts.filter((ad) => {
      return (
        (!filters.location ||
          ad.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (filters.equipment.length === 0 ||
          filters.equipment.every((eq) => ad.details[eq])) &&
        (!filters.type || ad.type === filters.type)
      );
    });
    setFilteredAds(result);
    setShowNoResults(result.length === 0);
  };

  return (
    <div className={css.wrap}>
      <div className={css.filters}>
        <Filter
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
        />
      </div>
      <div className={css.cards}>
        {filteredAds.length > 0 ? (
          filteredAds.map((ad) => (
            <CardCamper
              key={ad._id}
              ad={ad}
              onClick={() => handleCardClick(ad)}
            />
          ))
        ) : showNoResults ? (
          <p>No ads found for the selected location.</p>
        ) : null}
        {isLoading && <p>Loading...</p>} {/* Использование isLoading */}
        {!isLoading &&
          filteredAds.length % 4 === 0 &&
          filteredAds.length > 0 && (
            <button className={css.btnLoadMore} onClick={loadMore}>
              Load more
            </button>
          )}
        {!isLoading && filteredAds.length % 4 !== 0 && filteredAds.length > 0}
        {isError && <p>Error: {isError}</p>}
        {selectedAd && (
          <Modal
            isOpen={!!selectedAd}
            onClose={handleCloseModal}
            adverts={selectedAd}
          />
        )}
      </div>
    </div>
  );
};

export default CatalogList;
