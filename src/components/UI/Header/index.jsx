const Header = ({ title }) => {
  return (
    <div className="flex items-center justify-center space-x-3 h-[100px]">
      <img src="/logo.svg" alt="logo" />
      <p className="text-main text-xl font-[600]">{title}</p>
    </div>
  );
};

export default Header;
