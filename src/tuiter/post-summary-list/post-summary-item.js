import React from "react";

const PostSummaryItem = ( {
    post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component-based front end library that makes it very easy to build "
                 + "Single Page Applications or SPAs",
        "image": "reactJS.png"
    }
}
) => {
    let emptyUsername = post.userName === "";
    let nonEmptyUsernameText =
        <span>
            <span className="fw-bolder">{post.userName} </span>
            <i className="bi bi-patch-check-fill"/>
            <span className="text-muted"> - {post.time}</span>
        </span>
    ;
    const userNameTitle = emptyUsername ? "" : nonEmptyUsernameText;
    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-10"> { /* text */ }

                    { /* Topic */ }
                    <div className="text-muted">
                        {post.topic}
                    </div>
                    { /* Username, Time */ }
                    <div>
                        {userNameTitle}
                    </div>
                    { /* Title */ }
                    <div className="fw-bolder">
                        {post.title}
                    </div>
                </div>
                { /* Image */ }
                <div className="col-2 mt-auto mb-auto">
                    <img className="rounded float-end"
                         height={75} width={75}
                         alt="Post Image"
                         src={`/images/${post.image}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default PostSummaryItem;