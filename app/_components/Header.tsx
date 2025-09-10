import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-primary-900 border-b px-8 py-5">
      <div className="space-y-4 md:mx-auto md:flex md:max-w-7xl md:items-center md:justify-between md:space-y-0">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
