import { $team } from "@jx3box/jx3box-common/js/https";
import axios from "axios";
import { __spider } from "@jx3box/jx3box-common/data/jx3box.json";
const $spider = axios.create({ baseURL: __spider });

function getDaily(date) {
    return $team({ mute: true }).get("/xoyo/daily/task", {
        params: {
            date: date, //int,时间戳，单位秒
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

export { getServers, getPrice, getMeirentu, getDaily };
