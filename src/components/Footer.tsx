const Footer = () => {
  return (
    <div className="bg-orange-500 py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold trackin-tight">
          MernEats.com
        </span>
        <span className="text-white font-bold tracking-tright flrx gap-4">
          <span>Privacy policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
