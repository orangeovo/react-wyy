import axios from "../utils/request"


/**路径地址 */
const base = {
    baseURL: "http://121.199.50.226:3000",
    // 轮播图
    banner: "/banner?type=2",
    // 发现页的推荐歌单
    FindRecommendedSongList: "/personalized?limit=6",
    // 发现页热门歌单
    FindHitList: "/top/playlist/highquality?limit=6",
    // 数字专辑-新碟上架
    Digitalalbum: "/album/list?limit=6",
    // 推荐MV
    RecommendedMV: "/personalized/mv",
    // 网友精选
    NetizenSelection: "/top/playlist?limit=6",
    //获取歌单所有歌曲
    SongListDetails: "/playlist/track/all",
    //获取歌曲详情
    SongsDetails: "/song/detail",
    //获取歌单详情
    SongsList: "/playlist/detail",
    //获取mv数据
    MvDetails: "/mv/detail",
    //mv地址
    Mvurl: "/mv/url",
    //mv评论
    Mvcomments: "/comment/mv",
    //获取视频
    RecommendedVideo: "/mv/exclusive/rcmd?limit=10",
    //刷新登录状态
    RestartLogin: "/login/refresh",
    //获取视频url
    VideoUrls: "/video/url",
    //获取首页数据
    Homepage: "/homepage/block/page",
    //热搜列表
    HotSearch: "/search/hot/detail",
    //搜索功能
    SearchMessage: "/cloudsearch",
    //登录
    login: "/login/cellphone",
    //登录用户信息
    loginuser: "/user/detail",
    //获取用户歌单
    usersonglist: "/user/playlist",
    //退出登录
    logout: "/logout",
    //获取音乐url
    musicurl: "/song/url",
    //获取歌曲评论
    songscomment: "/comment/music",
    //获取歌词
    lyric: "/lyric",
    //喜欢该音乐
    likesong: "/like",
    //每日推荐
    tuijian: "/recommend/songs"
}


/**请求方法 */
const api = {
    // 获取发现页轮播图
    getBanners() {
        return axios.get(base.baseURL + base.banner)
    },
    //获取发现页推荐歌单
    getFindRecommendedSongList() {
        return axios.get(base.baseURL + base.FindRecommendedSongList)
    },
    //获取发现页热门歌单
    getFinHitList() {
        return axios.get(base.baseURL + base.FindHitList)
    },
    //新碟上架
    getDigitalalbum() {
        return axios.get(base.baseURL + base.Digitalalbum)
    },
    //推荐MV
    getRecommendedMV() {
        return axios.get(base.baseURL + base.RecommendedMV)
    },
    // 网友精选
    getNetizenSelection() {
        return axios.get(base.baseURL + base.NetizenSelection)
    },
    //获取歌单所有歌曲
    getSongListDetails(id, cookie) {
        return axios.get(base.baseURL + base.SongListDetails, {
            params: {
                id: id,
                cookie
            }
        })
    },
    //根据id 获取歌单信息
    getSongsList(id, cookie) {
        return axios.get(base.baseURL + base.SongsList, {
            params: {
                id: id,
                cookie
            }
        })
    },
    //歌曲详情
    getSongsDetails(ids) {
        return axios.get(base.baseURL + base.SongsDetails, {
            params: {
                ids: ids
            }
        })
    },
    // Mv信息
    getMvDetails(mvid) {
        return axios.get(base.baseURL + base.MvDetails, {
            params: {
                mvid: mvid
            }
        })
    },
    //Mv地址
    getMvurl(id) {
        return axios.get(base.baseURL + base.Mvurl, {
            params: {
                id
            }
        })
    },
    //mv 评论
    getMvcomments(id, offset) {
        return axios.get(base.baseURL + base.Mvcomments, {
            params: {
                id,
                offset
            }
        })
    },
    //推荐视频
    getRecommendedVideo(offset) {
        return axios.get(base.baseURL + base.RecommendedVideo, {
            params: {
                offset
            }
        })
    },
    //刷新登录状态
    getRestartLogin() {
        return axios.get(base.baseURL + base.RestartLogin)
    },
    getVideoUrls(id) {
        return axios.get(base.baseURL + base.VideoUrls, {
            params: {
                id
            }
        })
    },
    //获取首页数据
    getHomepage() {
        return axios.get(base.baseURL + base.Homepage)
    },
    //热门搜索列表
    getHotSearch() {
        return axios.get(base.baseURL + base.HotSearch)
    },
    //搜索功能
    getSearchMessage(keywords) {
        return axios.get(base.baseURL + base.SearchMessage, {
            params: {
                keywords
            }
        })
    },
    //登录
    getLogin(phone, password) {
        return axios.get(base.baseURL + base.login, {
            params: {
                phone,
                password
            }
        })
    },
    //用户信息
    getloginuser(uid) {
        return axios.get(base.baseURL + base.loginuser, {
            params: {
                uid
            }
        })
    },
    //用户歌单
    getusersonglist(uid) {
        return axios.get(base.baseURL + base.usersonglist, {
            params: {
                uid
            }
        })
    },
    getlogout() {
        return axios.get(base.baseURL + base.logout)
    },
    //获取音乐src
    getmusicurl(id) {
        return axios.get(base.baseURL + base.musicurl, {
            params: {
                id: id
            }
        })
    },
    //歌曲评论
    getsongscomment(id, offset) {
        return axios.get(base.baseURL + base.songscomment, {
            params: {
                id,
                limit: 20,
                offset
            }
        })
    },
    getlyric(id) {
        return axios.get(base.baseURL + base.lyric, {
            params: {
                id
            }
        })
    },
    //喜欢
    getlikesong(id, type, cookie) {
        return axios.get(base.baseURL + base.likesong, {
            params: {
                id,
                type,
                cookie
            }
        })
    },
    gettuijian(cookie) {
        return axios.get(base.baseURL + base.tuijian, {
            params: {
                cookie
            }
        })
    }

}

export default api;