import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./Sidebar.css";
import profile1 from "../../assets/profiles/profile1.png";
import profile2 from "../../assets/profiles/profile2.png";
import profile3 from "../../assets/profiles/profile3.jpg";
import profile4 from "../../assets/profiles/profile2.png";
import profile5 from "../../assets/profiles/profile3.jpg";
export default function Sidebar(){
    return(
        <div className="sidebar">
            <ProfileCard mainprofile={profile1} username="vedantk0411" name="Vedant Kharkar" btnText="Switch" width="60px"/>
            <div className="suggestions">
            <span>Suggestions For You</span>
                <a  href="##"><small>See All</small></a>
            </div>
            <div className="seggestionsArea">
            <ProfileCard mainprofile={profile2} username="Shardul" name="Followed by Rahul_3+5" btnText="Follow" width="35px"/>
            <ProfileCard mainprofile={profile5} username="Rohit" name="Followed by Riya__4+3" btnText="Follow" width="35px"/>
            <ProfileCard mainprofile={profile4} username="Arnav" name="Followed by Rahul3+20" btnText="Follow" width="35px"/>
            <ProfileCard mainprofile={profile3} username="Chaitanya" name="Followed by Yashasvi+1" btnText="Follow" width="35px"/>
            <div className="sidebarLinks">
                <span>About.</span>
                <span>Help.</span>
                <span>API.</span>
                <span>Jobs.</span> 
                <span>Privacy.</span>
                <span>Terms.</span>
                <span>Locations. </span>
                <span>Top Accounts.</span>
                <span>Hashtags.</span>
                <span>Language.</span>
                <span>English(UK).</span>
                <br/>
                <br/>
            <span>
                @ 2021 INSTAGRAM BY META
            </span>
            </div>
            </div>
            </div>
        
    )
}