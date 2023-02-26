import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">Adventure Helper</Link>
      </div>
      <nav className="header__nav">
        <Link href="/tips" className="header__nav-item">
          Tips
        </Link>
        <Link href="/about" className="header__nav-item">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
