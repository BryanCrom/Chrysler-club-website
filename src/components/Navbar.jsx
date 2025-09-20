import chryslerSticker from "../assets/Chrysler-Sticker.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-base-100 shadow-md">
      <div className="max-w-full p-2 md:mx-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              className="h-24 w-24 md:h-[136px] md:w-[136px]"
              src={chryslerSticker}
            />
            <h1 className="text-xl md:text-3xl">Chrysler Restorers Club NZ</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
