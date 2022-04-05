import thinking from "../../media/images/undraw_thinking.png";

const Header = () => {
  return (
    <div>
      <header className="font-Lato text-white pl-5 pt-20 pb-14 uppercase ">
        <h1 className="text-lg tracking-wiidest ">Norman Pendzich</h1>
        <h1 className="text-xs tracking-wiiidest">Web Developer</h1>
      </header>
      <div>
        <img src={thinking} alt="thinking" />
      </div>
      <div className="bg-base-purple waves ">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
    </div>
  );
};

export default Header;
