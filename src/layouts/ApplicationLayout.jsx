import { NavLink, Outlet } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

const ApplicationLayout = () => {
  return (
    <main>
      <PageTitle title={'Application'} />
      <h4 className="text-xl font-bold mb-5">Application</h4>
      <div className="bg-white px-7 h-[50px] flex items-stretch rounded-lg">
        <NavLink
          to="/application/all"
          className={({ isActive }) =>
            isActive
              ? 'border-[#11998e] border-b-[2px] px-4 pt-4 box-border text-sm font-bold'
              : 'px-4 pt-4 text-sm font-bold'
          }
        >
          All
        </NavLink>
        <NavLink
          to="/application/shortlisted"
          className={({ isActive }) =>
            isActive
              ? 'border-[#11998e] border-b-[2px] px-4 pt-4 box-border text-sm font-bold'
              : 'px-4 pt-4 text-sm font-bold'
          }
        >
          Shortlisted
        </NavLink>
        <NavLink
          to="/application/in-process"
          className={({ isActive }) =>
            isActive
              ? 'border-[#11998e] border-b-[2px] px-4 pt-4 box-border text-sm font-bold'
              : 'px-4 pt-4 text-sm font-bold'
          }
        >
          In process
        </NavLink>
        <NavLink
          to="/application/on-hold"
          className={({ isActive }) =>
            isActive
              ? 'border-[#11998e] border-b-[2px] px-4 pt-4 box-border text-sm font-bold'
              : 'px-4 pt-4 text-sm font-bold'
          }
        >
          On Hold
        </NavLink>
        <NavLink
          to="/application/rejected"
          className={({ isActive }) =>
            isActive
              ? 'border-[#11998e] border-b-[2px] px-4 pt-4 box-border text-sm font-bold'
              : 'px-4 pt-4 text-sm font-bold'
          }
        >
          Rejected
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default ApplicationLayout;
