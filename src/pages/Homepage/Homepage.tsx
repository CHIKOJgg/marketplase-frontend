import { Helmet } from 'react-helmet';
import { TestDiv } from '../styled';
const Homepage: React.FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>main</title>
      </Helmet>
      <h1>Homepage</h1>
      <TestDiv />
    </>
  );
};
export default Homepage;
