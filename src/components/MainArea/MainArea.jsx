import React from 'react'
import StoryCard from '../StoryCard/StoryCard'
import PostCard from '../PostCard/PostCard'
// import story1 from '../../assets/stories/story1.jpeg'
import story2 from '../../assets/stories/story2.png'
import story3 from '../../assets/stories/story3.png'
import story4 from '../../assets/stories/story4.png'
import story5 from '../../assets/stories/story5.png'
import story6 from '../../assets/stories/story6.png'
import story7 from '../../assets/stories/story7.png'
import story8 from '../../assets/stories/story8.png'
import post1 from "../../assets/posts/post1.png"
import post2 from "../../assets/posts/post2.png"
import post3 from "../../assets/posts/post3.png"
import post4 from "../../assets/posts/post4.png"
import post5 from "../../assets/posts/post5.png"
import post6 from "../../assets/posts/post6.png"
import profile1 from "../../assets/profiles/profile1.png";

import './MainArea.css'

const MainArea = ({img, likes}) => {
    return (
        <div className="mainArea">
            <div className="storyArea">
                
                <StoryCard  img={profile1} username="vedantkharkar"/>
                <StoryCard  img={story2} username="klrahul"/>
                <StoryCard  img={story3} username="iamsrk"/>
                <StoryCard  img={story4} username="viratkohli"/>
                <StoryCard  img={story5} username="elonmusk"/>
                <StoryCard  img={story6} username="narendramodi"/>
                <StoryCard  img={story7} username="jonathangaming"/>
                <StoryCard  img={story8} username="bhuvanbam"/>

            </div>


            <div className="postsArea">
                <PostCard img={post1} likes="20,21,113" username="iamsrk" comment1="vedantk0411 ❤️❤️❤️" comment2="anushkasharma 😘😘" />
                <PostCard img={post2} likes="8,74,321" username="mahi7781" comment1="vedantk0411 MSD is❤️" comment2="anishsk12 🔥" />
                <PostCard img={post3} likes="41,223" username="the_engineer_bro" comment1="vedantk0411 Mumbai Is Best😁" comment2="sanika2104 😐😐"/>
                <PostCard img={post4} likes="7,65,432" username="rvcjinsta" comment1="vedantk0411 😂😂😂" comment2="shubham1243 🤣🤣🤣"/>
                <PostCard img={post5} likes="10,22,553" username="indiancricketteam" comment1="vedantk0411 ❤️❤️❤️" comment2=" chaitanyask123 🙌🙌"/>
                <PostCard img={post6} likes="3,253" username="coding_masters" comment1="vedantk0411 🔥" comment2="anujk 🙌🙌"/>
              
            </div>
        </div>
    )
}

export default MainArea
