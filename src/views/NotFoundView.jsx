// VIEW: NotFoundView
// PURPOSE: Display a friendly, multilingual 404 message

import React from 'react';

const NotFoundView = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-orange-50 via-pink-100 to-yellow-50">
      <h1 className="text-5xl font-extrabold text-orange-500 mb-2">404</h1>
      <p className="text-xl font-semibold mb-6">Lost in translation?</p>

      <div className="space-y-1 text-muted-foreground">
        <p><strong>EN:</strong> Page not found.</p>
        <p><strong>FR:</strong> Page introuvable.</p>
        <p><strong>ES:</strong> Página no encontrada.</p>
        <p><strong>DE:</strong> Seite nicht gefunden.</p>
        <p><strong>GR:</strong> Η σελίδα δεν βρέθηκε.</p>
      </div>

      <div className="mt-6 text-sm text-muted">
        Return to <a href="/" className="text-orange-600 hover:underline">Home</a> or try a different route.
      </div>
    </div>
  );
};

export default NotFoundView;
