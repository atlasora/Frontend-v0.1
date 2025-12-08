import { useState } from "react";
import { Header } from "../../components/Header";
import { AccountSidebar } from "../../components/AccountSidebar";
import { ContentWrapperSubsection } from "./sections/ContentWrapperSubsection";

const Dashboard = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
      <AccountSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div
        className="bg-[#070a0d] w-full min-w-[1440px] relative flex flex-col"
        data-model-id="3:2"
      >
        {/* All the "Welcome back, Stephanie!" + cards etc come from this subsection */}
        <ContentWrapperSubsection />
      </div>
    </>
  );
};

export default Dashboard;
