import React from "react"
import "./PostCard.css";
import {BiDotsHorizontalRounded} from "react-icons/bi"
import {FaUserCircle} from "react-icons/fa" 
import {FaRegHeart} from "react-icons/fa" 
import {FaRegComment} from "react-icons/fa" 
import {FiSend} from "react-icons/fi" 
import {BsBookmark} from "react-icons/bs" 
import {GrEmoji} from "react-icons/gr"

export default function PostCard({ likes, img, username, comment1,comment2}){
    return(
            <div className="PostCard">
                <div className="postCard__header">
                    <div>
                    <FaUserCircle className="posticon" />
                    <span>{username}</span>
                    <div><small></small></div>

                    </div>
                <span>
                <BiDotsHorizontalRounded />
                </span>
                </div>
                <img src={img} width="100%" alt="post" />
                <div className="postaction">
                    <div>
                    <FaRegHeart className="posticon"/>
                    <FaRegComment className="posticon"/>
                    <FiSend className="posticon"/>
                    </div>
                    <div>
                        <BsBookmark className="posticon"/>
                    </div>
                    
                </div>
                <div className="post_content">
                    <span>
                        <b>{likes} likes</b>
                        </span>
                    <div><b>{username}</b></div>
                    <div className="lightertext"><small>view comments</small></div>
                    <div className="lightertext"><small>{comment1}</small></div>
                    <div className="lightertext"><small>{comment2}</small></div>
                    <div className="lightertext"><small>1 day ago</small></div>
                    <hr/>
                    <div className="post__comment">
                        <GrEmoji className="posticon" />
                        <input typ="text" placeholder="Add a Comment..."/>
                        <a href="a">post</a>
                    </div>
                </div>
            </div>
    )
}