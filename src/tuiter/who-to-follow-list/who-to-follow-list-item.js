import React from "react";
import {Link} from "react-router-dom";

const WhoToFollowListItem = (
    {
        who = { /* default item */
            avatarIcon: 'java.png',
            userName: 'Java',
            handle: 'Java'
        }
    }
) => {
    return (
        <div className="list-group-item">
            <div className="row">

                { /* COLUMN 1: Profile Photo */ }
                <div className="col-2">
                    <img className="rounded-circle" alt="Java-icon"
                         height={50} width={50}
                         src={`/images/${who.avatarIcon}`}/>
                </div>

                { /* COLUMN 2: Account Info (name, handle) */ }
                <Link to="#" className="col-8" style={ { color: 'inherit', textDecoration: 'none' } }>
                    <div className="fw-bolder">
                        {who.userName} <i className="bi bi-patch-check-fill"/>
                    </div>
                    <div className="text-muted">
                        @{who.handle}
                    </div>
                </Link>

                { /* COLUMN 3: Follow Button */ }
                <div className="col-2">
                    <button id="follow-Java" type="button"
                            className="btn btn-primary rounded-pill float-end mt-1">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhoToFollowListItem;