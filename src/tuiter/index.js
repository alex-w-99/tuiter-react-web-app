import React from "react";
import {Routes, Route} from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import WhoToFollowList from "./who-to-follow-list";
import HomeComponent from "./home";

function Tuiter() {
    return (
        <div className="row mt-2">

            { /* COLUMN 1: Navigation Sidebar */ }
            <div className="col-xl-2 col-lg-1 col-md-2 col-2">
                <NavigationSidebar/>
            </div>

            { /* COLUMN 2: Explore Component */ }
            <div className="col-xl-6 col-lg-7 col-10" style={ { "position": "relative" } }>
                <Routes>
                    <Route index element={<ExploreComponent/>}/>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>

            { /* COLUMN 3: Who To Follow List */ }
            <div className="col-xl-4 col-lg-4 d-lg-block d-md-none d-sm-none d-none">
                <WhoToFollowList/>
            </div>

        </div>
    );
}

export default Tuiter;