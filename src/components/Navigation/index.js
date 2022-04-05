import Header from "../Header";

const Navigation = ({ isOpen, toggle, isDay, toggleDayNight }) => {
  return (
    <div className="w-screen overflow-x-hidden h-screen bg-blue-500 dark:bg-black">
      <div
        className={`bg-blue-500 dark:bg-black text-white absolute ${
          isOpen ? "h-screen w-screen" : "h-0 w-0"
        }`}
      />
      <div
        className={`circle bg-amber-300 dark:bg-gray-500 rounded-full absolute z-50 ${
          isOpen
            ? "h-[800px] w-[800px] top-[-200px] right-[-150px]"
            : "h-[150px] w-[150px] top-[-40px] right-[-40px] "
        }`}
      />

      <div className="" onClick={toggle}>
        <div className={`burger-item ${isOpen ? "active " : "md:hidden"}`}>
          <div className="burger-line" />
          <div className="burger-line" />
          <div className="burger-line" />
        </div>
      </div>

      <div>
        <ul
          className={`text-white  absolute top-[100px] left-[100px]  ${
            isOpen ? "asd" : "hidden md:flex md:text-black"
          }`}
          onClick={toggle}
        >
          <li>Deutsch</li>
          <li>English</li>
        </ul>
      </div>
      <div className="absolute top-0 left-0">
        <p className=" text-black" onClick={toggleDayNight}>
          {isDay ? "Day" : "Night"}
        </p>
      </div>
      <Header></Header>
    </div>
  );
};
export default Navigation;
