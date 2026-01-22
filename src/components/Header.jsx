const Header = () => {
  return (
    <header className="grid grid-cols-3 items-center px-6 py-4 text-white shadow-md bg-white">

      <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">
        MyLogo
      </h1>

      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center bg-white rounded-md overflow-hidden shadow-sm border border-gray-300 w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-4 py-2 text-black outline-none"
          />
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition text-white">
            🔍
          </button>
        </div>

        <div className="text-2xl cursor-pointer hover:text-blue-400 transition">
          👤
        </div>
      </div>

      <div></div>

    </header>
  );
};

export default Header;
