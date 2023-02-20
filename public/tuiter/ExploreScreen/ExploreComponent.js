import PostSummaryList from "../PostSummaryList/index.js";

/* eslint-env jquery */
const ExploreComponent = () => {
    return(`
        <!-- COLUMN 2, ROW 1: Search bar -->
        <div class="row">
            <!-- magnifying glass and actual search bar -->
            <div class="col-11">
                <div class="position-relative">
                    <div class="wd-search-magnifying-glass">
                        <i class="fa fa-search"></i>
                    </div>
                    <input id="search-tuiter" class="rounded-pill form-control ps-5"
                           type="text" placeholder="Search Tuiter"
                    />
                </div>
            </div>
            <!-- settings gear -->
            <div class="col-1">
                <div class="position-relative">
                    <div class="wd-search-settings-gear text-primary">
                        <a href="explore-settings.html">
                            <i class="fa fa-cog fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>

        <!-- COLUMN 2, ROW 2: Five tabs -->
        <div class="nav nav-tabs mt-2">
            <!-- For you -->
            <div class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </div>

            <!-- Trending -->
            <div class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </div>

            <!-- News -->
            <div class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </div>

            <!-- Sports -->
            <div class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </div>

            <!-- Entertainment -->
            <div class="nav-item d-md-block d-none">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </div>

        </div>

        <!-- COLUMN 2, ROW 3: Main content -->
        <!-- main image -->
        <div class="position-relative mt-2">
            <a href="#">
                <img alt="SpaceX Starship"
                     width="100%"
                     src="../../images/spaceXStarship.png"
                />
                <h2 class="position-absolute wd-main-content-image-caption">
                    SpaceX's Starship
                </h2>
            </a>
        </div>

        <!-- main stories -->
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;