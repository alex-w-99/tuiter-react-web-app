import PostSummaryList from "./index.js";

/* eslint-env jquery */
const test = () => {
    $('#testPostSummaryList').append(`${PostSummaryList()}`)
}
$(test)