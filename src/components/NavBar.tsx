import logo from "../assets/logo.svg";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <img src={logo} alt="logo" className="h-[39.9px] w-[64.09px]" />
      <ul className="flex gap-[40px] text-body text-gun-metal">
        <li className="hover:text-light-vermillion">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-light-vermillion">
          <a href="/">New</a>
        </li>
        <li className="hover:text-light-vermillion">
          <a href="/">Popular</a>
        </li>
        <li className="hover:text-light-vermillion">
          <a href="/">Trending</a>
        </li>
        <li className="hover:text-light-vermillion">
          <a href="/">Categories</a>
        </li>
      </ul>
    </nav>
  );
}
