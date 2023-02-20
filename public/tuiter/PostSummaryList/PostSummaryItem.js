/* eslint-env jquery */
const PostSummaryItem = (post) => {
    let emptyUserName = post.userName === '';
    let nonEmptyUsernameText = `
        <span class="fw-bolder">${post.userName} </span>
        <i class="fa fa-check-circle"></i>
        <span class="text-muted">- ${post.time}</span>
    `;
    const userNameTitle = emptyUserName ? "" : nonEmptyUsernameText;
    return(`
        <div class="list-group-item">
            <div class="row">
                <div class="col-10"> <!-- text -->
                
                    <!-- Topic -->
                    <div class="text-muted">
                        ${post.topic}
                    </div>
                    <!-- Username, Time -->
                    <div>
                        ${userNameTitle}              
                    </div>
                    <!-- Title -->
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                </div>
                <!-- Image -->
                <div class="col-2 mt-auto mb-auto"> 
                    <img class="rounded float-end"
                         height="75px" width="75px"
                         alt="Post Image"
                         src=${post.image}
                    />
                </div>
            </div>
        </div>
    `);
}
export default PostSummaryItem;