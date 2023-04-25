import "./Post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData";
import { useState } from "react";

const Post = ({post}) => {

  // const user = Users.filter(u=>u.id===1)
  // console.log(user);


// Hooks (UseState)
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = ()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }


  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
                <span className="postUserName">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>

            <div className="postTopRight">
                <MoreVertIcon/>
            </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" onClick={likeHandler} src="/assets/like.png" alt="" />
            <img className="likeIcon" onClick={likeHandler} src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post










//Api- APIs are mechanisms that enable two software components to communicate with each other 
//UseContext - It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
//JSON- JavaScript Object Notation. It is used for storing the temporary data.
//ReactRouterDOM - React Router DOM enables you to implement dynamic routing in a web app.
//link - A Link is an element that lets the user navigate to another page by clicking or tapping on it.
//usestate its is type of hook which allows us to add state to a functional component. it is used to render b/w current state and 
//updated state
//The map() function is used to iterate over an array and manipulate or change data items. 
//Class component - These components are simple classes (made up of multiple functions that add functionality to the application).
//Functional component - these are the simply javascript function
//Props - props are nothing but the arguments which are passed into react component. It is used to store data so that its child components
//can use the data.
//Spread syntax allows you to deconstruct an array or object into separate variables.