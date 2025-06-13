// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomeView from "./views/HomeView";
import GlossaryView from "./views/GlossaryView";
import VaultView from "./views/VaultView";
import LookupView from "./views/LookupView";
import ContextNavigatorView from "./views/ContextNavigatorView";
import LanguageManagerView from "./views/LanguageManagerView";
import NotFoundView from "./views/NotFoundView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="glossary" element={<GlossaryView />} />
        <Route path="vault" element={<VaultView />} />
        <Route path="lookup" element={<LookupView />} />
        <Route path="contexts" element={<ContextNavigatorView />} />
        <Route path="languages" element={<LanguageManagerView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}

export default App;
