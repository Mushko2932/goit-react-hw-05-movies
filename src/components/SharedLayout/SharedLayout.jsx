import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
