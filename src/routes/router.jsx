import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import AllApplications from '../components/AllApplications';
import ApplicationLayout from '../layouts/ApplicationLayout';
import Shortlisted from '../components/Shortlisted';
import InProcess from '../components/InProcess';
import OnHold from '../components/OnHold';
import Rejected from '../components/Rejected';
import Jobs from '../pages/Jobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/application',
        element: <ApplicationLayout />,
        children: [
          {
            path: '/application/all',
            element: <AllApplications />,
          },
          {
            path: '/application/shortlisted',
            element: <Shortlisted />,
          },
          {
            path: '/application/in-process',
            element: <InProcess />,
          },
          {
            path: '/application/on-hold',
            element: <OnHold />,
          },
          {
            path: '/application/rejected',
            element: <Rejected />,
          },
        ],
      },
      {
        path: '/jobs',
        element: <Jobs />,
      },
    ],
  },
]);

export default router;
