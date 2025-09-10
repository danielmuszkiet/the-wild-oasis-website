import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-primary-900 border-b px-8 py-5">
      <div className="flex flex-col items-center space-y-8 md:mx-auto md:max-w-7xl md:flex-row md:justify-between md:space-y-0">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
