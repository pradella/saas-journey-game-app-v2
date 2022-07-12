import { lazy, ReactElement, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';

import { UserContext } from './context/UserContext';
import WithNavFooter from './components/NavFooter/WithNavFooter';
import WithNavHeader from './components/NavHeader/WithNavHeader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Spinner from './components/UI/Spinner/Spinner';
import { routes } from './selectors/routes';

const Following = lazy(() => import('./pages/Following/Following'));
const Home = lazy(() => import('./pages/Home/Home'));
const Search = lazy(() => import('./pages/Search/Search'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const Stats = lazy(() => import('./pages/Stats/Stats'));
const Trophies = lazy(() => import('./pages/Trophies/Trophies'));
const TrophyDetail = lazy(() => import('./pages/TrophyDetail/TrophyDetail'));

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path={routes.HOME.path}
            element={
              <Private>
                <WithNavFooter>
                  <Home />
                </WithNavFooter>
              </Private>
            }
          />
          <Route
            path={routes.STATS.path}
            element={
              <Private>
                <WithNavFooter>
                  <Stats />
                </WithNavFooter>
              </Private>
            }
          />
          <Route
            path={routes.FOLLOWING.path}
            element={
              <Private>
                <WithNavFooter>
                  <Following />
                </WithNavFooter>
              </Private>
            }
          />
          <Route
            path={routes.TROPHIES.path}
            element={
              <Private>
                <WithNavFooter>
                  <Trophies />
                </WithNavFooter>
              </Private>
            }
          />
          <Route
            path={routes.SEARCH.path}
            element={
              <Private>
                <WithNavFooter>
                  <Search />
                </WithNavFooter>
              </Private>
            }
          />
          <Route
            path={routes.GAME_TROPHY.path}
            element={
              <Private>
                <WithNavHeader>
                  <TrophyDetail />
                </WithNavHeader>
              </Private>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;

function Private({ children }: { children: ReactElement }) {
  const user = useContextSelector(UserContext, (c) => c.user);
  const isAuthenticated = !!user;
  return isAuthenticated ? children : <Navigate to="/" />;
}
