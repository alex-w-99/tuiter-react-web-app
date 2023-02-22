import React from "react";
import whoArray from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return (
        <div className="list-group">
            { /* Who to follow */ }
            <div className="list-group-item">
                <div className="fw-bolder">
                    Who to follow
                </div>
            </div>

            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who}
                    />
                )
            }

        </div>
    );
};

export default WhoToFollowList;