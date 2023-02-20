import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

/* eslint-env jquery */
function explore() {
    $('#wd-explore').append(`
        
        <div class="row mt-2">
   
            <!-- COLUMN 1: Navigation Sidebar -->
            <div class="col-xl-2 col-lg-1 col-md-2 col-2">
                ${NavigationSidebar('Explore')}
            </div>
           
           <!-- COLUMN 2: Explore Component -->
            <div class="col-xl-6 col-lg-7 col-10">
                ${ExploreComponent()}
            </div>
           
           <!-- COLUMN 3: Who To Follow List -->
            <div class="col-xl-4 col-lg-4 d-lg-block d-md-none d-sm-none d-none">
                ${WhoToFollowList()}
            </div>
       
        </div>
   `);
}
$(explore);