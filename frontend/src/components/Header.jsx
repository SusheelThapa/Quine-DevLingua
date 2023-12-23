import { Link } from "react-router-dom";

const Header = ({ features, active_feature }) => {
  return (
    <div className="bg-black h-20 flex justify-start items-center px-64 text-white">
      <div className="text-3xl tracking-wide">
        <span className="text-white">dev</span>
        <span className="text-green-400	bold underline">Lingua</span>
      </div>

      <div>
        <ul className="flex justify-center items-center text-white text-l">
          {features.map(({ label, icon }) => {
            return (
              <Link to={`/${label}`} key={label}>
                <li
                  className={`hover:text-green-500 ml-20 flex justify-center items-center ${
                    active_feature == label ? "text-green-500" : ""
                  }`}
                >
                  {icon}
                  <span className="ps-2">{label}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
