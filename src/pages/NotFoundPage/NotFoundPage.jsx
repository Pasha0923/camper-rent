import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";


const NotFoundPage = () => {
  return (
    <div className={css.div}>
    
      <button className={css.btnHome}>
        <Link to="/">Back to home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
