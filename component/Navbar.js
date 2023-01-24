const Navbar = () => {
  return (
    <>
      <div className="flex w-full  items-center justify-center gap-5 bg-red-500">
        <div className="w-4/12 h-fit bg-blue-500 text-bold bg-red-500">
          Collection
        </div>
        <div className="w-4/12 h-fit bg-blue border-32 text-2xl">Contact</div>
        <select className="w/12 h-fit bg-blue">
          <option>About</option>
          <option>Product</option>
          <option>Pricelist</option>
        </select>
      </div>
    </>
  );
};

export default Navbar;
