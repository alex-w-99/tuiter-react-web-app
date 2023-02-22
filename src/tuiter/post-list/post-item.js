import React from "react";
import {Link} from "react-router-dom";

const PostItem = ( { post } ) => {

    { /* conditionally formatting post's image */ }
    let postImage = null;
    if (post.postPreviewUrl !== null) { // if post has a URL/preview
        postImage =
            <div className="list-group">
            
                <div className="list-item border border-secondary"
                     style={ { borderTopLeftRadius: 10, borderTopRightRadius: 10 } }>
                    <img alt="Post Link Preview Image"
                         style={ { borderTopLeftRadius: 10, borderTopRightRadius: 10 } }
                         width="100%"
                         src={`/images/${post.postImage}`}/>
                </div>

                <span className="list-item pt-2 border border-secondary p-3"
                     style={ { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 } }>
                    <div>{post.postPreviewTitle}</div>
                    <div className="text-muted">{post.postPreviewText}</div>
                    <i className="text-muted bi bi-link"/>
                    &nbsp;
                    <Link to="#">
                        <span className="text-muted">{post.postPreviewUrl}</span>
                    </Link>
                </span>
                
            </div>
        ;
    }
    else { // if post is only including an image, no URL
        postImage =
            <img className="rounded border border-secondary" alt="Post Image" width="100%"
                 src={`/images/${post.postImage}`}/>
        ;
    }

    return (
        <div className="list-group-item pb-2">
            <div className="row">
                { /* Pfp image column */ }
                <div className="col-xxl-1">
                    <img className="rounded-circle" alt="pfp"
                         height="50px" width="50px"
                         src={`/images/${post.pfp}`}/>
                </div>

                { /* Post column */ }
                <div className="col-xxl-11">

                    { /* Poster information row */ }
                    <div className="row">
                        <Link to="#" className="col-11" style={ { "color": "inherit", "textDecoration": "none" } }>
                            <span className="fw-bolder">{post.username}</span>
                            <i className="fa fa-check-circle"/>
                            &nbsp;
                            <span className="text-muted">@{post.handle} • {post.time}</span>
                        </Link>
                        <Link to="#" className="col-1">
                            <i className="text-muted fa fa-ellipsis-h"/>
                        </Link>
                    </div>

                    { /* Post text row */ }
                    {post.text}
                    <br/>

                    { /* Post image row */ }
                    <Link to="#" className="pt-2" style={ { color: "black", textDecoration: "none" } }>
                        {postImage}
                    </Link>

                    { /* Post interactions row */ }
                    <div className="d-flex justify-content-between m-2 pt-2">
                        { /* Comment */ }
                        <Link to="#" className="text-muted me-4" style={ { "textDecoration": "none" } }>
                            <i className="bi bi-chat"/>
                            &nbsp;
                            <span>{post.comments}</span>
                        </Link>

                        { /* Retuit */ }
                        <Link to="#" className="text-muted me-4" style={ { "textDecoration": "none" } }>
                            <i className="bi bi-arrow-clockwise"/>
                            &nbsp;
                            <span>{post.retuits}</span>
                        </Link>

                        { /* Like */ }
                        <Link to="#" className="text-muted me-4" style={ { "textDecoration": "none" } }>
                            <i className="bi bi-heart"/>
                            &nbsp;
                            <span>{post.likes}</span>
                        </Link>

                        { /* Share */ }
                        <Link to="#" className="text-muted me-4" style={ { "textDecoration": "none" } }>
                            <i className="bi bi-upload"/>
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default PostItem;