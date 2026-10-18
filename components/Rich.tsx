// Renders **bold** segments inside a plain string
export default function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-fg">{p}</strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}
