// COMPONENT: NotFoundView.jsx
// PURPOSE: Graceful 404 fallback with neumorphic styling and multilingual message
// STYLE: Soft shadow, rounded container, center aligned

import { Link } from "react-router-dom";

export default function NotFoundView() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center p-6 rounded-3xl shadow-neu bg-white/90 dark:bg-zinc-800/60">
        <h1 className="text-5xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-muted-foreground italic mb-6">Lost in translation?</p>

        <div className="space-y-1 text-left text-sm text-foreground">
          <p><strong>EN:</strong> Page not found.</p>
          <p><strong>FR:</strong> Page introuvable.</p>
          <p><strong>ES:</strong> Página no encontrada.</p>
          <p><strong>DE:</strong> Seite nicht gefunden.</p>
          <p><strong>GR:</strong> Η σελίδα δεν βρέθηκε.</p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center mt-6 px-4 py-2 rounded-full bg-surface text-indigo-700 font-semibold shadow-neu hover:shadow-md transition"
        >
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
}
