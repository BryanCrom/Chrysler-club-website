import chryslerSticker from "../assets/Chrysler-Sticker.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full border-b border-base-content/20 bg-base-100">
      <div className="max-w-full p-4 md:mx-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={chryslerSticker} width="125" height="125" />
            <h1 className="text-3xl">Chrysler Restorers Club NZ</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
