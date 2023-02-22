import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return (
        <>
            { /* COLUMN 2, ROW 1: Search bar */ }
            <div className="row">
                { /* magnifying glass and actual search bar */ }
                <div className="col-11">
                    <div className="position-relative">
                        <div className="wd-search-magnifying-glass">
                            <i className="bi bi-search"/>
                        </div>
                        <input id="search-tuiter" className="rounded-pill form-control ps-5"
                               type="text" placeholder="Search Tuiter"
                        />
                    </div>
                </div>
                { /* settings gear */ }
                <div className="col-1">
                    <div className="position-relative">
                        <div className="wd-search-settings-gear text-primary">
                            <a href="#">
                                <i className="bi bi-gear-fill bi-2x"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            { /* COLUMN 2, ROW 2: Five tabs */ }
            <div className="nav nav-tabs mt-2">
                { /* For you */ }
                <div className="nav-item">
                    <a className="nav-link active" href="#">For you</a>
                </div>
                { /* Trending */ }
                <div className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </div>
                { /* News */ }
                <div className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </div>
                { /* Sports */ }
                <div className="nav-item">
                    <a className="nav-link" href="#">Sports</a>
                </div>
                { /* Entertainment */ }
                <div className="nav-item d-md-block d-none">
                    <a className="nav-link" href="#">Entertainment</a>
                </div>
            </div>

            { /* COLUMN 2, ROW 3: Main content */ }
            { /* main image */ }
            <div className="position-relative mt-2">
                <a href="#">
                    <img alt="SpaceX Starship"
                         width="100%"
                         src="/images/spaceXStarship.png"
                    />
                    <h2 className="position-absolute wd-main-content-image-caption">
                        SpaceX's Starship
                    </h2>
                </a>
            </div>

            { /* main stories */ }
            <PostSummaryList/>
        </>
    );
};

export default ExploreComponent;