import { useState } from "react";
import {
  useClient,
  type DocumentActionComponent,
  type DocumentActionDescription,
  type DocumentActionProps,
  type SanityDocument,
} from "sanity";

type VoucherDoc = SanityDocument & {
  code?: string;
  productType?: string;
  sessionsTotal?: number;
  sessionsRemaining?: number;
  customAmount?: number;
  customAmountRemaining?: number;
  status?: string;
};

function isBlock(productType?: string): boolean {
  return Boolean(productType && productType.startsWith("block_"));
}

function isCustom(productType?: string): boolean {
  return productType === "voucher_custom";
}

function nextStatus(remaining: number): string {
  if (remaining <= 0) return "fully_redeemed";
  return "partially_redeemed";
}

const PlusIcon = () => <span style={{ fontSize: 16 }}>+</span>;
const EurIcon = () => <span style={{ fontSize: 16 }}>EUR</span>;

export const RedeemBlockSessionAction: DocumentActionComponent = (
  props: DocumentActionProps,
): DocumentActionDescription | null => {
  const client = useClient({ apiVersion: "2024-01-01" });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [note, setNote] = useState("");
  const [running, setRunning] = useState(false);

  const doc = (props.draft || props.published) as VoucherDoc | null;
  if (!doc || !isBlock(doc.productType)) return null;

  const remaining = doc.sessionsRemaining ?? doc.sessionsTotal ?? 0;
  if (remaining <= 0) return null;

  return {
    label: `1 Behandlung einloesen (${remaining} uebrig)`,
    icon: PlusIcon,
    onHandle: () => setDialogOpen(true),
    dialog: dialogOpen
      ? {
          type: "dialog",
          header: "Behandlung einloesen",
          onClose: () => setDialogOpen(false),
          content: (
            <div style={{ padding: "1rem" }}>
              <p>
                Eine Behandlung von <strong>{doc.code as string}</strong> einloesen.
              </p>
              <p>
                Es bleiben dann <strong>{remaining - 1}</strong> von {doc.sessionsTotal} uebrig.
              </p>
              <label>
                Notiz (optional):
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.25rem",
                  }}
                  placeholder="z.B. Heilmassage 60 Min am 12.05.2026"
                />
              </label>
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  gap: "0.5rem",
                  justifyContent: "flex-end",
                }}
              >
                <button onClick={() => setDialogOpen(false)} disabled={running}>
                  Abbrechen
                </button>
                <button
                  disabled={running}
                  onClick={async () => {
                    setRunning(true);
                    try {
                      const newRemaining = remaining - 1;
                      const newStatus = nextStatus(newRemaining);
                      await client
                        .patch(props.id)
                        .setIfMissing({ redemptions: [] })
                        .append("redemptions", [
                          {
                            _key: `redemption-${Date.now()}`,
                            date: new Date().toISOString(),
                            sessionsRedeemed: 1,
                            note: note || undefined,
                          },
                        ])
                        .set({ sessionsRemaining: newRemaining, status: newStatus })
                        .commit();
                      setDialogOpen(false);
                      setNote("");
                      props.onComplete();
                    } catch (err) {
                      console.error(err);
                      alert("Fehler beim Einloesen — siehe Konsole");
                    } finally {
                      setRunning(false);
                    }
                  }}
                >
                  {running ? "Wird eingeloest..." : "Einloesen"}
                </button>
              </div>
            </div>
          ),
        }
      : undefined,
  };
};

export const RedeemCustomAmountAction: DocumentActionComponent = (
  props: DocumentActionProps,
): DocumentActionDescription | null => {
  const client = useClient({ apiVersion: "2024-01-01" });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [running, setRunning] = useState(false);

  const doc = (props.draft || props.published) as VoucherDoc | null;
  if (!doc || !isCustom(doc.productType)) return null;

  const remaining = doc.customAmountRemaining ?? doc.customAmount ?? 0;
  if (remaining <= 0) return null;

  return {
    label: `Betrag einloesen (EUR ${remaining} uebrig)`,
    icon: EurIcon,
    onHandle: () => setDialogOpen(true),
    dialog: dialogOpen
      ? {
          type: "dialog",
          header: "Betrag einloesen",
          onClose: () => setDialogOpen(false),
          content: (
            <div style={{ padding: "1rem" }}>
              <p>
                Vom Gutschein <strong>{doc.code as string}</strong> einen Betrag einloesen.
              </p>
              <label>
                Betrag in EUR:
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  step="1"
                  min="1"
                  max={remaining}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.25rem",
                  }}
                />
              </label>
              <label>
                Notiz (optional):
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.5rem",
                  }}
                  placeholder="z.B. Heilmassage 45 Min am 12.05.2026"
                />
              </label>
              <p style={{ marginTop: "0.5rem" }}>
                Restbetrag: <strong>EUR {remaining - (Number(amount) || 0)}</strong>
              </p>
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  gap: "0.5rem",
                  justifyContent: "flex-end",
                }}
              >
                <button onClick={() => setDialogOpen(false)} disabled={running}>
                  Abbrechen
                </button>
                <button
                  disabled={running || !amount || Number(amount) <= 0 || Number(amount) > remaining}
                  onClick={async () => {
                    setRunning(true);
                    try {
                      const amountNum = Number(amount);
                      const newRemaining = remaining - amountNum;
                      const newStatus = nextStatus(newRemaining);
                      await client
                        .patch(props.id)
                        .setIfMissing({ redemptions: [] })
                        .append("redemptions", [
                          {
                            _key: `redemption-${Date.now()}`,
                            date: new Date().toISOString(),
                            amountRedeemed: amountNum,
                            note: note || undefined,
                          },
                        ])
                        .set({ customAmountRemaining: newRemaining, status: newStatus })
                        .commit();
                      setDialogOpen(false);
                      setAmount("");
                      setNote("");
                      props.onComplete();
                    } catch (err) {
                      console.error(err);
                      alert("Fehler beim Einloesen — siehe Konsole");
                    } finally {
                      setRunning(false);
                    }
                  }}
                >
                  {running ? "Wird eingeloest..." : "Einloesen"}
                </button>
              </div>
            </div>
          ),
        }
      : undefined,
  };
};
