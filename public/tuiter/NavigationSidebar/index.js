/* eslint-env jquery */
const Index = (active) => {
    const myDiv = document.createElement('div');
    myDiv.innerHTML = `
        <!-- Navigation Sidebar (minus "Tuit" button) -->
        <div class="list-group">

            <!-- Tuiter logo -->
            <div class="list-group-item">
                <a href="#" class="wd-blank-anchor">
                    <i class="fab fa-twitter"></i>
                </a>
            </div>

            <!-- "Home" -->
            <div id="Home" class="list-group-item">
                <a href="../HomeScreen/index.html" class="wd-blank-anchor">
                    <i class="fa fa-home"></i>
                    <div class="d-xl-inline-block d-none">
                        Home
                    </div>
                </a>
            </div>

            <!-- "Explore" -->
            <div id="Explore" class="list-group-item">
                <a href="../ExploreScreen/index.html" class="wd-blank-anchor">
                    <i class="fa fa-hashtag"></i>
                    <div class="d-xl-inline-block d-none">
                        Explore
                    </div>
                </a>
            </div>

            <!-- "Notifications" -->
            <div id="Notifications" class="list-group-item">
                <a href="#" class="wd-blank-anchor">
                    <i class="fa fa-bell"></i>
                    <div class="d-xl-inline-block d-none">
                        Notifications
                    </div>
                </a>
            </div>

            <!-- "Messages" -->
            <div id="Messages" class="list-group-item">
                <a href="#" class="wd-blank-anchor">
                    <i class="fa fa-envelope"></i>
                    <div class="d-xl-inline-block d-none">
                        Messages
                    </div>
                </a>
            </div>

            <!-- "Bookmarks" -->
            <div id="Bookmarks" class="list-group-item">
                <a href="#" class="wd-blank-anchor">
                    <i class="fa fa-bookmark"></i>
                    <div class="d-xl-inline-block d-none">
                        Bookmarks
                    </div>
                </a>
            </div>

            <!-- "Lists" -->
            <div id="Lists" class="list-group-item">
                <a href="#" class="wd-blank-anchor">
                    <i class="fa fa-list"></i>
                    <div class="d-xl-inline-block d-none">
                        Lists
                    </div>
                </a>
            </div>

            <!-- "Profile" -->
            <div id="Profile" class="list-group-item">
                <a href="#" class="wd-blank-anchor">
                    <i class="fa fa-user"></i>
                    <div class="d-xl-inline-block d-none">
                        Profile
                    </div>
                </a>
            </div>

            <!-- "More" -->
            <div id="More" class="list-group-item wd-left-sidebar-more-height">
                <a href="#" class="wd-blank-anchor">
                    <span class="fa-stack wd-left-sidebar-more-icon-shift-leftwards">
                        <i class="fa fa-lg fa-circle fa-stack-1x"></i>
                        <i class="fa fa-xs fa-ellipsis-h fa-stack-1x" style="color: white;"></i>
                    </span>
                    <span class="wd-left-sidebar-more-text-shift-leftwards d-xl-inline-block d-none">
                        More
                    </span>
                </a>
            </div>

        </div>

        <!-- "Tuit" button -->
        <button id="tuit-button" type="button" class="btn btn-primary rounded-pill mt-2 w-100">
            Tuit
        </button>
    `;

    if (active === 'Home') { myDiv.querySelector(`#Home`).classList.add('active'); }
    else if (active === 'Explore') { myDiv.querySelector(`#Explore`).classList.add('active'); }
    else if (active === 'Notifications') { myDiv.querySelector(`#Notifications`).classList.add('active'); }
    else if (active === 'Messages') { myDiv.querySelector(`#Messages`).classList.add('active'); }
    else if (active === 'Bookmarks') { myDiv.querySelector(`#Bookmarks`).classList.add('active'); }
    else if (active === 'Lists') { myDiv.querySelector(`#Lists`).classList.add('active'); }
    else if (active === 'Profile') { myDiv.querySelector(`#Profile`).classList.add('active'); }
    else if (active === 'More') { myDiv.querySelector(`#More`).classList.add('active'); }

    return myDiv.innerHTML;
}
export default Index;