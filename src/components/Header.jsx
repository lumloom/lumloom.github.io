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
          <a href="https://lumloom.github.io/blog/">Blog</a>
          <a href="./account.html" aria-current={currentPage === 'account' ? 'page' : undefined}>
            Account
          </a>
        </nav>
      </div>
    </header>
  );
}
