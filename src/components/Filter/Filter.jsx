import PropTypes from "prop-types";
import css from "./Filter.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Iconsvg from "../../Icon/Icon";
import { useState } from "react";
const Filter = ({ filters, onFilterChange, onSearch }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newFilters = { ...localFilters };
    newFilters[name] = value;
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSearchClick = () => {
    onSearch();
  };

  const initialValues = {
    location: "",
    equipment: [],
    vehicleType: "",
  };
  const validationSchema = Yup.object().shape({
    location: Yup.string()
      .min(3, "Too short city name!")
      .max(58, "Too long city name!"),
  });
  const handleSearch = (values, { resetForm }) => {
    resetForm();
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSearch}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.filterForm}>
          <div className={css.location}>
            <label htmlFor="location" className={css.label}>
              Location
            </label>
            <div className={css.inputWrapper}>
              <Iconsvg iconName="mapPin" className={css.iconMap} />
              <Field
                type="text"
                id="location"
                name="location"
                className={css.locationInput}
                placeholder="enter the desired location"
                value={localFilters.location}
                onChange={handleChange}
              />
              <ErrorMessage
                className={css.error}
                name="location"
                component="span"
              />
            </div>
          </div>

          <div className={css.filterSection}>
            <label htmlFor="vehicle" className={css.label}>
              Filters
            </label>
            <div className={css.filterEquipment}>
              <h3 className={css.filterTitle}>Vehicle equipment</h3>
              <ul className={css.filterList}>
                {[
                  {
                    name: "airConditioner",
                    label: "AC",
                    iconName: "airContainer",
                  },
                  {
                    name: "automatic",
                    label: "Automatic",
                    iconName: "automatic",
                  },
                  {
                    name: "kitchen",
                    label: "Kitchen",
                    iconName: "kitchen",
                  },
                  { name: "TV", label: "TV", iconName: "TV" },
                  {
                    name: "shower",
                    label: "Shower/WC",
                    iconName: "shower",
                  },
                ].map((item) => (
                  <li className={css.filterItem} key={item.name}>
                    <label className={css.filterLabel}>
                      <Field
                        type="checkbox"
                        name="equipment"
                        value={item.name}
                        className={css.checkbox}
                        onChange={({ target: { checked, value } }) => {
                          if (checked) {
                            setFieldValue("equipment", [
                              ...values.equipment,
                              value,
                            ]);
                          } else {
                            setFieldValue(
                              "equipment",
                              values.equipment.filter((e) => e !== value)
                            );
                          }
                        }}
                      />
                      <div className={css.filterBoxChosed}>
                        <Iconsvg
                          iconName={item.iconName}
                          className={css.iconFilter}
                        />
                        <span>{item.label}</span>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={css.filterSection}>
            <h3 className={css.filterTitle}>Vehicle type</h3>
            <ul className={css.filterList}>
              {[
                {
                  name: "panelTruck",
                  label: "Van",
                  iconName: "camperSmall",
                },
                {
                  name: "fullyIntegrated",
                  label: "Fully Integrated",
                  iconName: "camperMedium",
                },
                { name: "alcove", label: "Alcove", iconName: "camperBig" },
              ].map((item) => (
                <li className={css.filterItem} key={item.name}>
                  <label className={css.filterLabel}>
                    <Field
                      type="radio"
                      name="vehicleType"
                      value={item.name}
                      className={css.radio}
                    />
                    <div className={css.filterBoxChosed}>
                      <Iconsvg
                        iconName={item.iconName}
                        className={css.iconFilterCamper}
                      />
                      <span>{item.label}</span>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <button className={css.btn} onClick={handleSearchClick}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;

Filter.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};
