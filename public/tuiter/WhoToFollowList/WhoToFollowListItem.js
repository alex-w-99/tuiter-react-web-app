const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item">
            <div class="row">
            
                <!-- COLUMN 1: Profile Photo -->
                <div class="col-2">
                    <img class="rounded-circle" alt="Java-icon"
                         height="50px" width="50px"
                         src=${who.avatarIcon}/>
                </div>
                
                <!-- COLUMN 2: Account Info (name, handle) -->
                <div class="col-8">
                    <a href="#" class="wd-blank-anchor">
                        <div class="fw-bolder">
                            ${who.userName} <i class="fa fa-check-circle"></i>
                        </div>
                        <div class="text-muted">
                            @${who.handle}
                        </div>
                    </a>
                </div>
                
                <!-- COLUMN 3: Follow Button -->
                <div class="col-2">
                    <button id="follow-Java" type="button"
                            class="btn btn-primary rounded-pill float-end mt-1">
                        Follow
                    </button>
                </div>

            </div>
        </div>
    `);
}
export default WhoToFollowListItem