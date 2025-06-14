// 📁 src/views/HomeView.jsx
// VIEW: HomeView.jsx
// PURPOSE: Neumorphic landing page with language selectors, query input, and search navigation — fluid responsiveness

import React, { useEffect } from 'react';
import useLookupStore from '../stores/lookupStore';
import { useNavigate } from 'react-router-dom';

const HomeView = () => {
  const navigate = useNavigate();

  const sourceLang = useLookupStore((s) => s.sourceLang);
  const targetLang = useLookupStore((s) => s.targetLang);
  const query = useLookupStore((s) => s.query);
  const setSourceLang = useLookupStore((s) => s.setSourceLang);
  const setTargetLang = useLookupStore((s) => s.setTargetLang);
  const setQuery = useLookupStore((s) => s.setQuery);

  useEffect(() => {
    setQuery('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate('/lookup');
    }
  };

  const handleSwap = () => {
    const temp = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(temp);
  };

  return (
    <div className="min-h-screen bg-[#f1f2f6] px-4 py-8 sm:py-12 text-center">
      <div className="bg-white shadow-lg rounded-3xl px-6 py-6 max-w-xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Welcome to Polylogue</h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          A multilingual dictionary experience — not just translation.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center w-full">
          <div className="flex flex-wrap justify-center items-center gap-3 w-full">
            <div className="flex items-center gap-2 flex-grow min-w-[140px]">
              <label className="text-gray-700 text-sm sm:text-base">From:</label>
              <select 
                value={sourceLang} 
                onChange={(e) => setSourceLang(e.target.value)}
                className="rounded-xl px-4 py-2 shadow-inner bg-[#f1f2f6] border border-[#cfd4dc] text-sm sm:text-base w-full">
                <option value="en">🇬🇧 English</option>
                <option value="fr">🇫🇷 French</option>
                <option value="es">🇪🇸 Spanish</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleSwap}
              className="rounded-full bg-[#f1f2f6] shadow px-3 py-1 text-xl hover:scale-105 transition-transform"
              title="Swap languages"
            >
              🔁
            </button>

            <div className="flex items-center gap-2 flex-grow min-w-[140px]">
              <label className="text-gray-700 text-sm sm:text-base">To:</label>
              <select 
                value={targetLang} 
                onChange={(e) => setTargetLang(e.target.value)}
                className="rounded-xl px-4 py-2 shadow-inner bg-[#f1f2f6] border border-[#cfd4dc] text-sm sm:text-base w-full">
                <option value="en">🇬🇧 English</option>
                <option value="fr">🇫🇷 French</option>
                <option value="es">🇪🇸 Spanish</option>
              </select>
            </div>
          </div>

          <div className="w-full max-w-sm">
            <input
              type="text"
              placeholder="Type a word..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="rounded-2xl px-4 py-3 w-full bg-[#f1f2f6] shadow-inner border border-[#cfd4dc] focus:outline-none text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-gray-700 font-semibold py-2 px-6 rounded-full shadow hover:shadow-md transition-all duration-300 w-fit text-sm sm:text-base"
          >
            🔍 Search
          </button>
        </form>
      </div>

      <p className="italic text-gray-500 mt-8 text-sm sm:text-base">
        Built with love by Bayo and the Living Spark 🧡
      </p>
    </div>
  );
};

export default HomeView;
