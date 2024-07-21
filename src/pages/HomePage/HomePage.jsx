import css from "./HomePage.module.css";
const HomePage = () => (
  <div className={css.container}>
    <h1 className={css.title}>Welcome to Camper Rental</h1>
    <h2 className={css.subtitle}>
      {" "}
      Embark on adventures with our best campers!
    </h2>
  </div>
);

export default HomePage;
