// VaultView.jsx
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
    <div className="p-4 md:p-6 max-w-screen-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-foreground">
        🧑‍💼 Vault
      </h1>
      <div className="space-y-4">
        {vaultCards.map((entry, index) => {
          console.log(`Vault entry [${index}]:`, entry); // Add this line

          return (
            <EntryCard
              key={entry.id}
              id={entry.id}
              term={entry.word}
              translation={entry.translation}
              direction={entry.direction ?? "unknown"}
              onDelete={() => removeFromVault(entry.id)} // o removeFromVault
            />
          );
        })}
      </div>
    </div>
  );
}
