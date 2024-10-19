const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          MearnEats.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-5">
          <span>Private policy</span>
          <span>Term of services</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
