import PropTypes from "prop-types";
import icons from "../../assets/symbol-defs.svg";
import css from "./FeaturesItem.module.css";
import Form from "../ModalForm/ModalForm";
const FeaturesItem = ({ adverts }) => {
  return (
    <div className={css.featuresCont}>
      <div className={css.wrap}>
        <div className={css.features}>
          <p className={css.featuresItem}>
            {" "}
            <svg width="20" height="20" className={css.iconAdult}>
              <use href={`${icons}#people`}></use>
            </svg>
            {adverts.adults} adults
          </p>
          <p className={css.featuresItem}>
            {" "}
            <svg width="20" height="20" className={css.iconAdult}>
              <use href={`${icons}#automatic`}></use>
            </svg>
            {adverts.transmission.charAt(0).toUpperCase() +
              adverts.transmission.slice(1)}
          </p>
          <p className={css.featuresItem}>
            {" "}
            <svg width="20" height="20" className={css.iconAdult}>
              <use href={`${icons}#petrol`}></use>
            </svg>{" "}
            {adverts.engine.charAt(0).toUpperCase() + adverts.engine.slice(1)}
          </p>
          {adverts.details.bathroom !== 0 && (
            <p className={css.featuresItem}>
              <svg width="20" height="20" className={css.iconAdult}>
                <use href={`${icons}#bathroom`}></use>
              </svg>
              <span>Bathroom</span>
            </p>
          )}

          {adverts.details.kitchen && (
            <p className={css.featuresItem}>
              <svg width="20" height="20" className={css.iconAdult}>
                <use href={`${icons}#kitchen`}></use>
              </svg>
              <span>Kitchen</span>
            </p>
          )}
          <p className={css.featuresItem}>
            {" "}
            <svg width="20" height="20" className={css.iconAdult}>
              <use href={`${icons}#bed`}></use>
            </svg>{" "}
            {adverts.details.beds} beds
          </p>
          <p className={css.featuresItem}>
            {" "}
            <svg width="20" height="20" className={css.iconAdult}>
              <use href={`${icons}#conditioner`}></use>
            </svg>{" "}
            {adverts.details.airConditioner} air conditioner
          </p>
          {adverts.details.TV !== 0 && (
            <p className={css.featuresItem}>
              <svg width="20" height="20" className={css.iconAdult}>
                <use href={`${icons}#TV`}></use>
              </svg>
              <span>TV</span>
            </p>
          )}
          {adverts.details.CD !== 0 && (
            <p className={css.featuresItem}>
              <svg width="20" height="20" className={css.iconAdult}>
                <use href={`${icons}#CD`}></use>
              </svg>
              <span>CD</span>
            </p>
          )}
          {adverts.details.radio !== 0 && (
            <p className={css.featuresItem}>
              <svg width="20" height="20" className={css.iconAdult}>
                <use href={`${icons}#radio`}></use>
              </svg>
              <span>Radio</span>
            </p>
          )}
          {adverts.details.shower !== 0 && (
            <p className={css.featuresItem}>
              <svg width="20" height="20" className={css.iconAdult}>
                <use href={`${icons}#shower`}></use>
              </svg>
              <span>Shower</span>
            </p>
          )}
          {adverts.details.toilet !== 0 && (
            <p className={css.featuresItem}>
              <svg width="20" height="20" className={css.iconAdult}>
                <use href={`${icons}#toilet`}></use>
              </svg>
              <span>Toilet</span>
            </p>
          )}
          {adverts.details.freezer !== 0 && (
            <p className={css.featuresItem}>
              <svg width="20" height="20" className={css.iconAdult}>
                <use href={`${icons}#freezer`}></use>
              </svg>
              <span>Freezer</span>
            </p>
          )}
          <p className={css.featuresItem}>
            <svg width="20" height="20" className={css.iconAdult}>
              <use href={`${icons}#hob`}></use>
            </svg>
            {adverts.details.hob} hob
          </p>
          {adverts.details.microwave !== 0 && (
            <p className={css.featuresItem}>
              <svg width="20" height="20" className={css.iconAdult}>
                <use href={`${icons}#microwave`}></use>
              </svg>
              <span>Microwave</span>
            </p>
          )}
          {adverts.details.gas !== 0 && (
            <p className={css.featuresItem}>
              <svg width="20" height="20" className={css.iconAdult}>
                <use href={`${icons}#gas`}></use>
              </svg>
              Gas: {adverts.details.gas}
            </p>
          )}
          <p className={css.featuresItem}>
            <svg width="20" height="20" className={css.iconAdult}>
              <use href={`${icons}#water`}></use>
            </svg>
            Water: {adverts.details.water}
          </p>
        </div>
        <div className={css.details}>
          <h3 className={css.detailsTitle}>Vehicle details</h3>
          <ul className={css.detailsList}>
            <li>
              <span>Form</span>
              <span>
                {adverts.form.charAt(0).toUpperCase() + adverts.form.slice(1)}
              </span>
            </li>
            <li>
              <span>Length</span>
              <span>{adverts.length}</span>
            </li>
            <li>
              <span>Width</span>
              <span>{adverts.width}</span>
            </li>
            <li>
              <span>Height</span>
              <span>{adverts.height}</span>
            </li>
            <li>
              <span>Tank</span>
              <span>{adverts.tank}</span>
            </li>
            <li>
              <span>Consumption</span>
              <span>{adverts.consumption}</span>
            </li>
          </ul>
        </div>
      </div>
      <Form />
    </div>
  );
};
FeaturesItem.propTypes = {
  adverts: PropTypes.shape({
    adults: PropTypes.number,
    transmission: PropTypes.string,
    engine: PropTypes.string,
    form: PropTypes.string,
    length: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    tank: PropTypes.string,
    consumption: PropTypes.string,
    details: PropTypes.shape({
      bathroom: PropTypes.number,
      kitchen: PropTypes.number,
      beds: PropTypes.number,
      airConditioner: PropTypes.number,
      TV: PropTypes.number,
      CD: PropTypes.number,
      radio: PropTypes.number,
      shower: PropTypes.number,
      toilet: PropTypes.number,
      freezer: PropTypes.number,
      hob: PropTypes.number,
      microwave: PropTypes.number,
      gas: PropTypes.string,
      water: PropTypes.string,
    }),
  }),
};
export default FeaturesItem;
