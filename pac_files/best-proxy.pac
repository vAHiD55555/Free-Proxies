function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.123.156.193:7794",
        "SOCKS 58.19.55.7:15070",
        "SOCKS 103.189.218.83:6969",
        "SOCKS 84.54.217.250:1080",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 58.19.55.7:15171",
        "SOCKS 58.19.55.88:15066",
        "SOCKS 116.236.146.234:4145",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 202.79.26.242:1080",
        "SOCKS 58.19.55.4:15012",
        "SOCKS 58.19.55.4:15051",
        "SOCKS 47.76.84.160:1145",
        "SOCKS 147.45.72.212:44816",
        "SOCKS 40.233.83.232:1081",
        "SOCKS 162.240.154.26:3128",
        "SOCKS 119.148.7.10:22122",
        "SOCKS 58.19.55.7:15174",
        "SOCKS 58.19.55.7:15043",
        "SOCKS 58.19.55.88:15001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}