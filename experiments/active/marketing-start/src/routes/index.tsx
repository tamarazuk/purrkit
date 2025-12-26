import { createFileRoute } from "@tanstack/react-router";

const highlights = [
  "Server functions for interactive marketing pages",
  "Streaming SSR out of the box",
  "Type-safe routing with TanStack Router",
];

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        padding: "3rem 1.5rem",
        background: "linear-gradient(135deg, #f8fafc 0%, #ecfdf5 100%)",
        color: "#0f172a",
        fontFamily:
          '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section style={{ maxWidth: "720px", textAlign: "center" }}>
        <p style={{ fontWeight: 600, letterSpacing: "0.08em" }}>
          TANSTACK START EXPERIMENT
        </p>
        <h1 style={{ fontSize: "3rem", margin: "1rem 0" }}>
          A lean marketing site powered by TanStack Start.
        </h1>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.6, margin: 0 }}>
          This starter is wired for Turbo and ready to grow into a full landing
          page. Swap in your own content, sections, and server functions as
          needed.
        </p>
      </section>
      <section
        style={{
          width: "100%",
          maxWidth: "720px",
          display: "grid",
          gap: "0.75rem",
        }}
      >
        {highlights.map((item) => (
          <div
            key={item}
            style={{
              padding: "1rem 1.25rem",
              borderRadius: "0.75rem",
              background: "#ffffff",
              boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
            }}
          >
            {item}
          </div>
        ))}
      </section>
      <section>
        <a
          href="https://tanstack.com/start"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            background: "#0f766e",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 600,
          }}
          rel="noreferrer"
          target="_blank"
        >
          Read the TanStack Start docs
        </a>
      </section>
    </main>
  );
}
