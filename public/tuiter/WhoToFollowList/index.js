import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whoToFollowItems from "./who.js";

/* eslint-env jquery */
const WhoToFollowList = () => {
    return(`
        <div class="list-group">
            <!-- Who to follow -->
            <div class="list-group-item">
                <div class="fw-bolder">
                    Who to follow
                </div>
            </div>
            
            ${
                whoToFollowItems.map(item => {
                    return(WhoToFollowListItem(item));
                }).join('')
            }
        
        </div>
    `);
}
export default WhoToFollowList;