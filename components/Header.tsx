import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">Adventure Helper</Link>
      </div>
      <nav className="header__nav">
        <Link href="/feed" className="header__nav-item">
          For you
        </Link>
        <Link href="/about" className="header__nav-item">
          About
        </Link>
        <Link href="/account" className="header__nav-item">
          Your Account
        </Link>
      </nav>
    </header>
  );
};

export default Header;
