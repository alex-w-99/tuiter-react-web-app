import PostList from "./PostList.js";

/* eslint-env jquery */
const test = () => {
        $('#testPostList').append(`${PostList()}`);
}
$(test)