function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.211.100.212:1081",
        "SOCKS 42.116.103.107:1106",
        "SOCKS 147.45.145.91:443",
        "SOCKS 191.222.217.204:9443",
        "SOCKS 45.74.31.40:11416",
        "SOCKS 185.236.9.157:1080",
        "SOCKS 199.66.183.226:4145",
        "SOCKS 45.74.31.40:4744",
        "SOCKS 141.164.58.134:1080",
        "SOCKS 45.74.31.42:4323",
        "SOCKS 221.176.85.235:1080",
        "SOCKS 69.174.54.121:12996",
        "SOCKS 45.74.31.47:7620",
        "SOCKS 45.74.31.47:8847",
        "SOCKS 45.74.31.46:5275",
        "SOCKS 45.74.31.46:11904",
        "SOCKS 31.56.189.176:10809",
        "SOCKS 45.74.31.40:10126",
        "SOCKS 47.82.87.75:1011",
        "SOCKS 81.162.123.152:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}