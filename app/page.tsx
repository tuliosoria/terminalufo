export default function Home() {
  return (
    <main
      style={{
        display: "grid",
        minHeight: "100vh",
        placeItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <section>
        <p
          style={{
            margin: "0 0 0.75rem",
            color: "#38bdf8",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Next.js
        </p>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2.5rem, 10vw, 6rem)",
            lineHeight: 1,
          }}
        >
          Hello from Terminal UFO
        </h1>
        <p
          style={{
            margin: "1rem auto 0",
            maxWidth: "36rem",
            color: "#94a3b8",
            fontSize: "1.125rem",
            lineHeight: 1.7,
          }}
        >
          Your new Next.js app is live-ready and configured for Amplify static
          hosting.
        </p>
      </section>
    </main>
  );
}
