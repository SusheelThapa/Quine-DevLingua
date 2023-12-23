import Header from "./Header";
import PropsTypes from "prop-types";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";

const HomePage = ({ active_feature }) => {
  const features = [
    { label: "codeinsight", icon: <FaMagnifyingGlass /> },
    { label: "codemaster", icon: <GiBrain /> },
    { label: "codelingo", icon: <GrLanguage /> },
  ];

  return (
    <div>
      <Header features={features} active_feature={active_feature} />
    </div>
  );
};

HomePage.propTypes = {
  active_feature: PropsTypes.string,
};

export default HomePage;
