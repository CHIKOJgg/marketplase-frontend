import PublicRoutes from 'routes/PublicRoutes';
import PrivateRoutes from 'routes/PrivateRoutes';
import { Suspense } from 'react';
import Header from 'features/Header';
import { AppStyles, Footer } from 'App.styled';
export const App = () => {
  return (
    //react.fragment ==<></>
    <>
      <AppStyles />
      <Header />
      <Suspense fallback={'loading'}>
        <PublicRoutes />
        {/* <PrivateRoutes /> */}
      </Suspense>
      <Footer>
        <div>Marketplase. All rights reserved 2025</div>
      </Footer>
    </>
  );
};
export default App;
