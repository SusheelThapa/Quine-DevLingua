import Header from "./Header";

const HomePage = ({ active_feature }) => {
  const features = ["codeinsight", "codemaster", "codelingo"];

  return (
    <div>
      <Header features={features} active_feature={active_feature} />
    </div>
  );
};

export default HomePage;
