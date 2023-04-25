import "./Profile.css";
import TopBar from "../../Components/TopBar/TopBar";
import SideBar from "../../Components/SideBar/SideBar";
import Feed from "../../Components/Feed/Feed";
import RightBar from "../../Components/RightBar/RightBar";

const Profile = () => {
  return (
    <div>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/pp.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Rohit Kumar Singh</h4>
                <h4 className="profileInfoDesc">Hello my friends</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
