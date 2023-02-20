import Index from "./index.js";

/* eslint-env jquery */
const test = () => {
    $('#testNavigationSidebar').append(`${Index('Explore')}`);
}
$(test)