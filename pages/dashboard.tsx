import type { NextPage } from 'next';

const Dashboard: NextPage = () => {
  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h1 className="text-4xl mb-5 font-bold">Dashboard</h1>
      <p>This page is only for admin</p>
      <span className="text-7xl">🏡</span>
    </div>
  );
};

export default Dashboard;
