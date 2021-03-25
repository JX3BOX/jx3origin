import { $spider, $team, axios } from "./axios";
import { __server } from "@jx3box/jx3box-common/data/jx3box.json";

function getDaily(date) {
    return $team({ mute: true }).get("/xoyo/daily/task", {
        params: {
            date: date, //int,时间戳，单位秒
        },
    });
}

function getGameNews() {
    // return $spider.get("/jx3news").then((res) => {
    //     return res.data;
    // });

    return axios.get(__server + "post/list", {
        params: {
            type: "bbs",
            subtype: 6,
            client: "origin",
        },
    });
}

function getServers() {
    return $spider.get("/jx3servers").then((res) => {
        return res.data.data;
    });
}

function getPrice() {
    return $spider.get("/jx3price");
}

// 美人图
function getMeirentu(server = "蝶恋花") {
    return $spider.get("/meirentu", {
        params: {
            server: server,
        },
    });
}

export { getGameNews, getServers, getPrice, getMeirentu, getDaily };
