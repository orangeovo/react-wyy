//时分秒换算
export default function dateformat(microsecond) {
    // 总秒数
    var second = Math.floor(microsecond);
    // 分钟
    var min = Math.floor(second / 60 % 60);
    // 秒
    var sec = Math.floor(second % 60);
    return (`${min}:${sec < 10 ? "0" + sec : sec}`)
};