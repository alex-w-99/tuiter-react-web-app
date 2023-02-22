import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    let active = paths[2];
    if (active === undefined) { active = "explore"; }

    return (
        <>
            { /* Navigation Sidebar (minus "Tuit" button) */ }
            <div className="list-group">

                { /* Tuiter logo */ }
                <Link href="#" className="list-group-item">
                    <i className="bi bi-twitter"/>
                </Link>

                { /* "Home" */ }
                <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="bi bi-house-fill"/>
                    <div className="d-xl-inline-block d-none ms-2">
                        Home
                    </div>
                </Link>

                { /* "Explore" */ }
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="bi bi-hash"/>
                    <div className="d-xl-inline-block d-none ms-2">
                        Explore
                    </div>
                </Link>

                { /* "Labs" */ }
                <Link to="/" className={`list-group-item`}>
                    <i className="bi bi-clipboard-data"/>
                    <div className="d-xl-inline-block d-none ms-2">
                        Labs
                    </div>
                </Link>

                { /* "Notifications" */ }
                <Link to="#" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="bi bi-bell-fill"/>
                    <div className="d-xl-inline-block d-none ms-2">
                        Notifications
                    </div>
                </Link>

                { /* "Messages" */ }
                <Link to="#" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                    <i className="bi bi-envelope-fill"/>
                    <div className="d-xl-inline-block d-none ms-2">
                        Messages
                    </div>
                </Link>

                { /* "Bookmarks" */ }
                <Link to="#" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className="bi bi-bookmark-fill"/>
                    <div className="d-xl-inline-block d-none ms-2">
                        Bookmarks
                    </div>
                </Link>

                { /* "Lists" */ }
                <Link to="#" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                    <i className="bi bi-list-ul"/>
                    <div className="d-xl-inline-block d-none ms-2">
                        Lists
                    </div>
                </Link>

                { /* "Profile" */ }
                <Link to="#" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                    <i className="bi bi-person-circle"/>
                    <div className="d-xl-inline-block d-none ms-2">
                        Profile
                    </div>
                </Link>

                { /* "More" */ }
                <Link to="#" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                    <i className="bi bi-three-dots"/>
                    <div className="d-xl-inline-block d-none ms-2">
                        More
                    </div>
                </Link>

            </div>

            { /* "Tuit" button */ }
            <button id="tuit-button" type="button"
                    className="btn btn-primary rounded-pill mt-2 w-100">
                Tuit
            </button>
        </>
    );
};

export default NavigationSidebar;