import "./Home.css";
import TopBar from "../../Components/TopBar/TopBar";
import SideBar from "../../Components/SideBar/SideBar";
import Feed from "../../Components/Feed/Feed";
import RightBar from "../../Components/RightBar/RightBar";

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
