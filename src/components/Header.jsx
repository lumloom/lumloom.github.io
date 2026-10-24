export default function Header({ currentPage }) {
  return (
    <header className="header">
      <div className="header-inner">
        <a href={currentPage === 'home' ? '#top' : './index.html'} className="header-logo">
          Lumloom
        </a>
        <nav className="header-nav" aria-label="Primary">
          <a href="./index.html#projects">Projects</a>
          <a href="./about.html" aria-current={currentPage === 'about' ? 'page' : undefined}>
            Our Story
          </a>
        </nav>
      </div>
    </header>
  );
}
