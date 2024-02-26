import logo from "../assets/logo.svg";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <img src={logo} alt="logo" className="w-[64.09px] h-[39.9px]" />
      <ul className="flex gap-[40px]">
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
