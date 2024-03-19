import { Sidebar } from 'flowbite-react';
import { IoMdBriefcase } from 'react-icons/io';
import { FaEnvelope } from 'react-icons/fa';
import { RiOrganizationChart } from 'react-icons/ri';
import { FaBookBookmark } from 'react-icons/fa6';
import { FaUserTag } from 'react-icons/fa6';
import { PiTreeStructureFill } from 'react-icons/pi';
import { BiSolidReport } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { IoLogOut } from 'react-icons/io5';
import { AiFillDashboard } from 'react-icons/ai';
import { FaClipboardList } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <main className="min-h-screen flex">
      <div className="h-full">
        <Sidebar className="bg-white" aria-label="Default sidebar example">
          <Sidebar.Logo href="/" img="/logo.png" imgAlt="Ayykori logo" />
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <h6 className="text-sm font-bold ml-2 mb-2">Menu</h6>
              <NavLink to="/">
                <Sidebar.Item icon={AiFillDashboard}>Dashboard</Sidebar.Item>
              </NavLink>
              <NavLink to="/application/all">
                <Sidebar.Item icon={FaClipboardList}>Application</Sidebar.Item>
              </NavLink>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <h6 className="text-sm font-bold ml-2 mb-2">Recruitment</h6>
              <NavLink to="/jobs">
                <Sidebar.Item icon={IoMdBriefcase}>Jobs</Sidebar.Item>
              </NavLink>
              <NavLink>
                <Sidebar.Item icon={FaEnvelope}>Message</Sidebar.Item>
              </NavLink>
              <NavLink>
                <Sidebar.Item icon={RiOrganizationChart}>
                  Career site
                </Sidebar.Item>
              </NavLink>
              <NavLink>
                <Sidebar.Item icon={FaBookBookmark}>My Refferrals</Sidebar.Item>
              </NavLink>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <h6 className="text-sm font-bold ml-2 mb-2">Organization</h6>

              <NavLink>
                <Sidebar.Item icon={FaUserTag}>Employee</Sidebar.Item>
              </NavLink>
              <NavLink>
                <Sidebar.Item icon={PiTreeStructureFill}>
                  Structure
                </Sidebar.Item>
              </NavLink>
              <NavLink>
                <Sidebar.Item icon={BiSolidReport}>Report</Sidebar.Item>
              </NavLink>
              <NavLink>
                <Sidebar.Item icon={IoMdSettings}>Settings</Sidebar.Item>
              </NavLink>
              <NavLink>
                <Sidebar.Item icon={IoLogOut}>Logout</Sidebar.Item>
              </NavLink>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="p-4 bg-[#e0edea] basis-full">
        <Outlet />
      </div>
    </main>
  );
};

export default Root;
