import { $cms } from "@jx3box/jx3box-common/js/https";

function getCode() {
    return $cms().get(`/api/cms/news`, {
        params: {
            client: "origin",
            type: "code",
        },
    });
}

function getNews() {
    return $cms().get(`/api/cms/news`, {
        params: {
            client: "origin",
            type: "news",
        },
    });
}

export { getCode,getNews };
