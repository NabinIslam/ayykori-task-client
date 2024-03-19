import AllApplications from '../components/AllApplications';
import PageTitle from '../components/PageTitle';
import { Tabs } from 'flowbite-react';
import Shortlisted from '../components/Shortlisted';
import InProcess from '../components/InProcess';
import OnHold from '../components/OnHold';
import Rejected from '../components/Rejected';

const Application = () => {
  return (
    <main>
      <PageTitle title={'Application'} />
      <h4 className="text-xl font-bold mb-5">Application</h4>
      <Tabs
        className="bg-white rounded-xl"
        aria-label="Tabs with underline"
        style="underline"
      >
        <Tabs.Item active title="All(165)">
          <AllApplications />
        </Tabs.Item>
        <Tabs.Item title="Shortlisted(45)">
          <Shortlisted />
        </Tabs.Item>
        <Tabs.Item title="In process(5)">
          <InProcess />
        </Tabs.Item>
        <Tabs.Item title="On Hold(25)">
          <OnHold />
        </Tabs.Item>
        <Tabs.Item title="Rejected(54)">
          <Rejected />
        </Tabs.Item>
      </Tabs>
    </main>
  );
};

export default Application;
