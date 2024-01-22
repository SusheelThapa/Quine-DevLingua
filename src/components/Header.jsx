import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Header = ({ features, active_feature }) => {
  return (
    <div className="bg-black">
      <div className=" h-20 flex justify-start items-center mx-64 text-white">
        <div className="text-3xl tracking-wide">
          <Link to={`/`}>
            <span className="text-white">dev</span>
            <span className="text-green-400	bold underline">Lingua</span>
          </Link>{" "}
        </div>
        <div>
          <ul className="flex justify-center items-center text-white text-l">
            {features.map(({ label, icon }) => {
              return (
                <Link to={`/${label}`} key={label}>
                  <li
                    className={`hover:text-green-500 ml-20 flex justify-center items-center ${
                      active_feature == label ? "text-green-500 font-bold" : ""
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
    </div>
  );
};

Header.propTypes = {
  features: PropTypes.array,
  active_feature: PropTypes.string,
};

export default Header;
