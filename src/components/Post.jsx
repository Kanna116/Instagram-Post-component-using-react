import { useState } from "react"

function Post(props) {
    const [liked, setLiked] = useState(true);
    const [saved, setSaved] = useState(true);
    let n = props.stats.likes
    const [likeCount, setLikeCount] = useState(n)
    
    function handleLikeClick() {
        setLiked(prevState => !prevState);
        if(liked){
            setLikeCount(prevCount => prevCount + 1)
        }
        else{
            setLikeCount(prevCount => prevCount - 1)

        }
    }
    function handleSaveClick() {
        setSaved(prevState => !prevState);
    }

    return (
        <>
            <div className="post">
                <div className="post--user">
                    <div className="user--image">
                        <img src={`/images/${props.profileImage}`} alt="" />
                    </div>
                    <a href="https://www.instagram.com/_klax_e/"><h3 className="post--username">{props.username}</h3></a>

                </div>

                <div className="post--image">
                    <img src={`/images/${props.postImage}`} alt="" />
                </div>

                <div className="post--btns">
                    {liked ? <i className="fa-regular fa-heart" onClick={handleLikeClick}></i> : <i className="fa-solid fa-heart" onClick={handleLikeClick}></i>}
                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-solid fa-location-arrow"></i>
                    {saved ? <i className="fa-regular fa-bookmark" onClick={handleSaveClick}></i> : <i className="fa-solid fa-bookmark" onClick={handleSaveClick}></i>}
                </div>
                <div className="post--counts">
                    <p>{likeCount}  likes</p>
                    <p>{props.stats.comments}  comments</p>
                </div>
                <div className="post--description">
                    @{props.username} - {props.desc}
                </div>
                <div className="post--see-more">
                    <button className="see-more">See More..</button>
                </div>


            </div>
        </>
    )

};
export default Post;

// like outline  <i class="fa-regular fa-heart"></i>
// like solid  <i class="fa-solid fa-heart"></i>

// save outline <i class="fa-regular fa-bookmark"></i>
// save solid <i class="fa-solid fa-bookmark"></i>