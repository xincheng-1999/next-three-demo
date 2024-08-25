export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="header-bar">
        <h1>header</h1>
      </header>
      <div>{children}</div>
    </>
  );
}
