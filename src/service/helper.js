import { $helper } from "@jx3box/jx3box-common/js/https";

function getSchoolRank(v) {
    return $helper().get(`/api/dps_group/${v}`);
}

function getWikiPosts(params) {
    return $helper().get(`/api/wiki/posts/newest`, {
        params: params,
    });
}

export { getSchoolRank, getWikiPosts };
