import WhoToFollowList from "./index.js";

/* eslint-env jquery */
const test = () => {
    $('#testWhoToFollowList').append(`${WhoToFollowList()}`);
}
$(test)