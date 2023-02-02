import "./Post.scss";

const Post = ({ image, name, text,date }) => {

    return (
        <div className="post">
            <div className="card-header">
                <div className="user">
                    <img src="/bot/build//images/icons/user.png" alt="" className="user-icon" />
                </div>
                <div className="header-data">
                    <div className="name">{name}</div>
                    <div className="data">{date}</div>
                </div>
            </div>
            {image && <div className="image-container">
                <div className="img-filter">  </div>
                <img src={`/bot/build//images/${image}`} alt="" className="post-img" />
            </div>}
            <div className="text">{text}</div>

        </div>
    )
}

export default Post