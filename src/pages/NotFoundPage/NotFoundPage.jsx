import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
// import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      {/* <DocumentTitle>Not found</DocumentTitle> */}
      <h2>&#x261D;Sorry, the page not found!</h2>
      <button className={css.btnHome}>
        <Link to="/">Back to home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
