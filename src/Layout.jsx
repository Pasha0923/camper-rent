import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loader from "./components/Loader/Loader";

export const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
