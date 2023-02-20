import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/PostList.js";
import PostSummaryList from "../PostSummaryList/index.js";

/* eslint-env jquery */
function home() {
    $('#wd-home').append(`
        <div class="container mt-2">
            <div class="row">
            
                <!-- COLUMN 1: Navigation Sidebar -->
                <div class="col-xl-2 col-lg-1 col-md-2 col-2">
                    ${NavigationSidebar('Home')}
                </div>
                
                <!-- COLUMN 2: PostList -->
                <div class="col-xl-6 col-lg-7 col-10">
                    ${PostList()}
                </div>
                
                <!-- COLUMN 3: PostSummaryList -->
                <div class="col-xl-4 col-lg-4 d-lg-block d-md-none d-sm-none d-none">
                    ${PostSummaryList()}
                </div>
            
            </div>
        </div>
    `);
}
$(home);