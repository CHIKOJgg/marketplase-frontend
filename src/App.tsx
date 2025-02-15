import PublicRoutes from 'routes/PublicRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';
import { Suspense } from 'react';
export const App = () => {
  return (
    <Suspense fallback={'loading'}>
      <PublicRoutes />
      {/* <PrivateRoutes /> */}
    </Suspense>
  );
};
export default App;
