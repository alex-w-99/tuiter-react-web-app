/* eslint-env jquery */
const PostItem = (post) => {
    // conditionally formatting post's image
    let postImage = ``;
    if (post.postPreviewUrl !== null) { // if post has a URL/preview
        postImage = `
            <div class="list-group">
            
                <!-- link image -->
                <div class="list-item wd-rounded-top-corners border border-secondary">
                    <img class="wd-rounded-top-corners" alt="Post Link Preview Image"
                        width="100%"
                        src="${post.postImage}"/>
                </div>
                
                <!-- accompanying text --> 
                <div class="list-item pt-2 wd-rounded-bottom-corners border border-secondary p-3">
                    <div class="text-white">${post.postPreviewTitle}</div>
                    <div class="text-muted">${post.postPreviewText}</div>
                    <a class="wd-blank-anchor" href="#">
                        <i class="text-muted fa fa-link"></i>
                        &nbsp;<span class="text-muted">${post.postPreviewUrl}</span>
                    </a>
                </div>
                
            </div>
        `;
    }
    else { // if post is only including an image, no URL
        postImage = `
            <img class="rounded border border-secondary" alt="Post Image" 
                width="100%"
                src="${post.postImage}"/>
        `;
    }

    return(`
        <div class="list-group-item pb-2">
            <div class="row">
                <!-- Pfp image column -->
                <div class="col-xxl-1">
                    <img class="rounded-circle" alt="pfp" 
                        height="50px" width="50px"
                        src="${post.pfp}"/>
                </div>
                
                <!-- Post column -->
                <div class="col-xxl-11" >
                
                    <!-- Poster information row -->
                    <div class="row">
                        <div class="col-11">
                            <a class="wd-blank-anchor" href="#">
                                <span class="fw-bolder">${post.username}</span>
                                <i class="fa fa-check-circle"></i>
                                <span class="text-muted">@${post.handle} • ${post.time}</span>
                            </a>
                        </div>
                        <div class="col-1">
                            <a class="wd-blank-anchor" href="#">
                                <i class="text-muted fa fa-ellipsis-h"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Post text row -->
                    ${post.text}
                    <br/>
                    
                    <!-- Post image row -->
                    <a class="wd-blank-anchor pt-2" href="#">
                        ${postImage}
                    </a>
                    
                    <!-- Post interactions row -->
                    <div class="d-flex justify-content-between m-2 pt-2">
                        <!-- Comment -->
                        <div class="text-muted me-4">
                            <a class="wd-blank-anchor" href="#">
                                <i class="fa fa-comment"></i>
                                <span>${post.comments}</span>
                            </a>
                        </div>
                        
                        <!-- Retuit -->
                        <div class="text-muted me-4">
                            <a class="wd-blank-anchor" href="#">
                                <i class="fa fa-comment"></i>
                                <span>${post.retuits}</span>
                            </a>
                        </div>
                        
                        <!-- Like -->
                        <div class="text-muted me-4">
                            <a class="wd-blank-anchor" href="#">
                                <i class="fa fa-heart"></i>
                                <span>${post.likes}</span>
                            </a>
                        </div>
                        
                        <!-- Share -->
                        <div class="text-muted me-4">
                            <a class="wd-blank-anchor" href="#">
                                <i class="fa fa-arrow-up"></i>
                            </a>
                        </div>
                        
                    </div>
                    
                </div>
                
                
            </div> 
        </div>
    `);
}
export default PostItem;