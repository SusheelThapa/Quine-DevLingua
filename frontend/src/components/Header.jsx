import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";

const Header = () => {
  return (
    <div className="bg-black h-20 flex justify-start items-center px-10 text-white">
      <div className="text-3xl tracking-wide">
        <span className="text-white">dev</span>
        <span className="text-green-400	bold underline">Lingua</span>
      </div>

      <div>
        <ul className="flex justify-center items-center text-white text-l">
          <li className="hover:text-green-500 ml-20 flex justify-center items-center">
            <FaMagnifyingGlass className="text-lg" />
            <span className="ps-2">CodeInsight</span>
          </li>
          <li className="hover:text-green-500 ml-10 flex justify-center items-center">
            <GiBrain className="text-lg" />
            <span className="ps-2">CodeMaster</span>
          </li>
          <li className="hover:text-green-500 ml-10 flex justify-center items-center">
            <GrLanguage className="text-lg" />
            <span className="ps-2">CodeLingo</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
