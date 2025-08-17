function Navbar() {
  return (
    <header className="w-full bg-[#31323e] shadow-md">
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="text-[#bfc0d1] font-bold text-2xl hover:text-[#60519b] cursor-pointer transition-colors font-serif">
          Kinolog
        </div>

        <ul className="flex items-center gap-8 text-[#bfc0d1] font-medium">
          <li className="relative group cursor-pointer">
            <span className="transition-colors group-hover:text-[#60519b]">Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#60519b] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="transition-colors group-hover:text-[#60519b]">Movies</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#60519b] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="transition-colors group-hover:text-[#60519b]">Series</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#60519b] transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <button className="text-[#bfc0d1] hover:text-[#60519b] transition-colors">Login</button>
          <button className="border border-[#60519b] text-[#bfc0d1] px-4 py-1 rounded-md hover:bg-[#60519b] hover:text-[#1e202c] transition-colors">
            Register
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
