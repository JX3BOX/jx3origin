import axios from "axios";
import { __server } from "@jx3box/jx3box-common/data/jx3box.json";
function getPosts(params) {
    return axios.get(__server + "post/list", {
        params: params,
    });
}

export { getPosts };
