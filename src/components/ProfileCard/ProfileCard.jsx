import React from "react";
import "./ProfileCard.css";
// import story2 from "../../assets/stories/story2.png";

export default function ProfileCard({mainprofile, username, name, btnText,width }){
    return(
        <div className="profilecard">
            <img src={mainprofile} alt="profile pic" width={width} />
            <div className="profileCard__Names">
                <span className="profileCard__user"><small>{username}</small></span>
                <span className="profileCard__name"><small>{name}</small></span>
            </div>
            <a href="##"><small>{btnText}</small></a>
            </div>
    )
}