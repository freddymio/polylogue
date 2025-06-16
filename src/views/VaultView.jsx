// 📁 src/views/VaultView.jsx
import { useVaultStore } from "../stores/vaultStore";
import EntryCard from "../components/shared/EntryCard";

/**
 * VaultView displays all saved vault entries
 * using shared EntryCard with vault-specific removal.
 */
export default function VaultView() {
  const vaultCards = useVaultStore((state) => state.cards);
  const removeFromVault = useVaultStore((state) => state.removeFromVault);

  return (
    <div className="p-4 md:p-6 max-w-screen-md mx-auto space-y-4">
      <div className="flex items-center gap-2 text-2xl font-bold">
        🧑‍💼 Vault
      </div>

      {vaultCards.length === 0 ? (
        <p className="text-muted-foreground">No entries saved in your vault yet.</p>
      ) : (
        vaultCards.map((entry, index) => (
          <EntryCard
            key={entry.id}
            id={entry.id}
            term={entry.word}
            translation={entry.translation}
            tag={entry.tag}
            direction={entry.direction ?? "unknown"}
            onDelete={() => removeFromVault(entry.id)}
          />
        ))
      )}
    </div>
  );
}
