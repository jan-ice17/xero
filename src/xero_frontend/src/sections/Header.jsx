const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-4 transition-all duration-500 flex justify-center items-center bg-[#1D1F3A]">
      <div className="container flex items-center justify-center">
        {/* Blue dot on the left side */}
        <div className="dot bg-blue-500 w-2 h-2 rounded-full mx-8" />

        {/* Logo in the center */}
        <div className="flex justify-center">
          <a className="cursor-pointer z-2">
            <img src="/images/xora.svg" width={160} height={55} alt="logo" />
          </a>
        </div>

        {/* Blue dot on the right side */}
        <div className="dot bg-blue-500 w-2 h-2 rounded-full mx-8" />
      </div>
    </header>
  );
};

export default Header;
