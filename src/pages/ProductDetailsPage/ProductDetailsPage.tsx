import { Helmet } from 'react-helmet';
import { TestDiv } from '../styled';
const ProductDetailsPage: React.FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>main</title>
      </Helmet>
      <h1>product details</h1>
      <TestDiv />
    </>
  );
};
export default ProductDetailsPage;
