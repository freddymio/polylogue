// COMPONENT: Layout.jsx
// PURPOSE: Global layout wrapper with HeaderBar and routed content
// STYLE: Minimal container layout with top navigation

import HeaderBar from "../components/shared/HeaderBar";
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <HeaderBar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}
