export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="header-logo">Lumloom</a>
        <nav className="header-nav" aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}
