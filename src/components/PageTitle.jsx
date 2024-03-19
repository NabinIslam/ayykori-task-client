import { Helmet } from 'react-helmet';

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>AyyKori | {title}</title>
    </Helmet>
  );
};

export default PageTitle;
