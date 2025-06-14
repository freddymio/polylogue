// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import PolylogueView from './views/PolylogueView';
import HomeView from "./views/HomeView";
import GlossaryView from "./views/GlossaryView";
import VaultView from "./views/VaultView";
import LookupView from "./views/LookupView";
import ContextNavigatorView from "./views/ContextNavigatorView";
import LanguageManagerView from "./views/LanguageManagerView";
import NotFoundView from "./views/NotFoundView";
import HistoryView from './views/HistoryView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PolylogueView />} />
        <Route path="/polylogue" element={<PolylogueView />} />
        <Route path="glossary" element={<GlossaryView />} />
        <Route path="vault" element={<VaultView />} />
        <Route path="lookup" element={<PolylogueView />} />
        <Route path="contexts" element={<ContextNavigatorView />} />
        <Route path="languages" element={<LanguageManagerView />} />
        <Route path="history" element={<HistoryView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}

export default App;
