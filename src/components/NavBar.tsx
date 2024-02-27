import logo from "../assets/logo.svg";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <img src={logo} alt="logo" className="h-[39.9px] w-[64.09px]" />
      <ul className="flex gap-[40px] text-body text-gun-metal">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">New</a>
        </li>
        <li>
          <a href="/">Popular</a>
        </li>
        <li>
          <a href="/">Trending</a>
        </li>
        <li>
          <a href="/">Categories</a>
        </li>
      </ul>
    </nav>
  );
}
