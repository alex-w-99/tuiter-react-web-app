import ExploreComponent from "./ExploreComponent.js";

/* eslint-env jquery */
const test = () => {
    $('#testExploreScreen').append(`${ExploreComponent()}`);
}
$(test)