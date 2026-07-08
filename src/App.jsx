import { HashRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Pipeline from "./pages/Pipeline";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Campaigns from "./pages/Campaigns";
import ClientProfile from "./pages/ClientProfile";


function App() {
  return (
    <HashRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/clients" element={<Clients />} />

<Route path="/pipeline" element={<Pipeline />} />   

<Route path="/tasks" element={<Tasks />} />

<Route path="/analytics" element={<Analytics />} />

<Route path="/campaigns" element={<Campaigns />} />

<Route path="/client-profile" element={<ClientProfile />} />

      </Routes>

    </HashRouter>
  );
}

export default App;