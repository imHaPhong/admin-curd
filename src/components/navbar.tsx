// import { AiOutlineMenu } from "react-icons/ai";

export function NavBar({ showSidebar }: { showSidebar: () => {} }) {
  return (
    <nav
      className="px-7 py-6 -mx-2 md:px-6 md:py-5 bg-primary text-white w-auto md:mx-0 md:h-16"
      onClick={showSidebar}
    >
      <button className="hamburger md:hidden">
        <span className="hamburger-bar" />
      </button>
    </nav>
  );
}
