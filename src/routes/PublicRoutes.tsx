import { lazy } from 'react';
import { Route, Navigate, Routes, useLocation } from 'react-router-dom';
import { checkPathMatch, paths } from './helpers';
const Homepage = lazy(() => import('pages/Homepage/Homepage'));
const ProductDetailsPage = lazy(
  () => import('pages/ProductDetailsPage/ProductDetailsPage')
);
const PublicRoutes: React.FunctionComponent = () => {
  const location = useLocation();
  const isMatch = checkPathMatch(location.pathname, paths);
  return (
    <Routes>
      <Route path={paths.home} element={<Homepage />} />
      <Route path={paths.productDetails} element={<ProductDetailsPage />} />
      <Route
        path="*"
        element={!isMatch ? <Navigate to={paths.home} /> : null}
      />
    </Routes>
  );
};
export default PublicRoutes;
