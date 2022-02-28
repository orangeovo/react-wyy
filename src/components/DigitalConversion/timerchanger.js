export default function timestampToTime2(timestamp) {
    if (timestamp === 0 || timestamp == null) {
        return "";
    } else {
        var date = new Date(timestamp);
        var Y = date.getFullYear() + "-";
        var M =
            (date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1) + "-";
        var D =
            date.getDate() < 10 ? "0" + date.getDate() + "" : date.getDate() + "";
        // var H = date.getHours() + ":";
        // var M2 =
        //     (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        //     ":";
        // var S =
        //     date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        return Y + M + D;
    }
}