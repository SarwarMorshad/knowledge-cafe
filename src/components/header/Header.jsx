import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center p-4 m-4 border-b-4">
      <h1 className="text-[40px] font-bold leading-[64px]">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
