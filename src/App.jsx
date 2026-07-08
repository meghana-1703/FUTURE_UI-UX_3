import { HashRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Clients from "./Pages/Clients";
import Pipeline from "./Pages/Pipeline";
import Tasks from "./Pages/Tasks";
import Analytics from "./Pages/Analytics";
import Campaigns from "./Pages/Campaigns";
import ClientProfile from "./Pages/ClientProfile";


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