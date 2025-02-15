import { Helmet } from 'react-helmet';
import { TestDiv } from '../styled';
const AccountSettingsPage: React.FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>main</title>
      </Helmet>
      <h1>account settings</h1>
      <TestDiv />
    </>
  );
};
export default AccountSettingsPage;
