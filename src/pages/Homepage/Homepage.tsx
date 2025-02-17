import { Helmet } from 'react-helmet';
import { TestDiv } from '../styled';
import { PageWrapper } from 'App.styled';
const Homepage: React.FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>main</title>
      </Helmet>
      <PageWrapper>
        <h1>Main Page</h1>
      </PageWrapper>
    </>
  );
};
export default Homepage;
