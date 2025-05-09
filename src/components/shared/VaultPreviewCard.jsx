// COMPONENT: VaultPreviewCard
// PURPOSE: Display a short preview of a dictionary entry in the Vault view

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const VaultPreviewCard = ({ entry }) => {
  return (
    <Card className="w-full p-4 flex flex-col gap-2 cursor-pointer hover:shadow-md transition">
      <CardContent className="p-0">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">{entry.headword}</p>
            <p className="text-muted-foreground">{entry.gloss}</p>
          </div>
          <ArrowRight size={20} className="text-muted-foreground" />
        </div>
        {entry.tags && entry.tags.length > 0 && (
          <div className="mt-2 flex gap-2 flex-wrap text-xs text-muted-foreground">
            {entry.tags.map((tag, i) => (
              <span key={i} className="bg-muted px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VaultPreviewCard;
