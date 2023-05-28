import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Header, NavList, Link, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <NavList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </NavList>
        </nav>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <footer></footer>
    </div>
  );
};

export default SharedLayout;
