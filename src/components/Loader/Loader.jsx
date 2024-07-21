import { Circles } from "react-loader-spinner";

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <Circles
        height="100"
        width="100"
        color="#e44848"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
