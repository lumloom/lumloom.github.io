export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-logo">Lumloom</p>
        <p className="footer-slogan">We weave brighter days.</p>
        <div className="footer-links">
          <a href="https://github.com/lumloom" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#blog">Blog</a>
          <a href="mailto:hello@lumloom.com">Contact</a>
        </div>
        <p className="footer-copyright">© {year} Lumloom. All rights reserved.</p>
      </div>
    </footer>
  );
}
