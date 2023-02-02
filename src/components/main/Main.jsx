import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCreatePostForm, showSuccessPopup } from "../../redux/actions/actionCreator";
import UploadFilesModal from "../upload-files-popup/UploadFilesModal";
import CreatePost from "../create-post/CreatePost";
import Post from "../post/Post";
import "./Main.scss";



const Main = () => {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.createPost.isOpen);
    const postsList = useSelector(state => state.createPost.postsList);
    const successPopup = useSelector(state => state.createPost.successPopup);

    useEffect(() => {
        if (successPopup) {
            setTimeout(() => dispatch(showSuccessPopup()), 5000)
        }
    },[])


    return (

        <div className="main-container">
            <div className="main">

                {isOpen
                    ? <CreatePost />
                    : <div className="btn-container"
                        onClick={() => dispatch(showCreatePostForm())}>
                        <button className="btn">Create New Post</button>
                    </div>
                }


                <UploadFilesModal />


                <div className="title">Last posts:</div>

                <div className="successful-popup" style={{ opacity: successPopup ? '1' : '0' }}>
                    <div className="check">
                        <img src="/bot/build//images/icons/check mark.png" alt="" className="check-img" />
                    </div>
                    <div className="text">Post was created successfully!</div>
                </div>

                <div className="posts">
                    {postsList.map(post => <Post
                        key={post.text}
                        image='skyscraper-g2406d67a1_1920.jpg'
                        name={post.name}
                        text={post.text}
                        date={post.date}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Main