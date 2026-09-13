function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:36571",
        "SOCKS 45.74.31.42:11904",
        "SOCKS 151.185.59.41:8080",
        "SOCKS 45.74.31.42:20058",
        "SOCKS 138.2.216.186:1080",
        "SOCKS 45.74.31.30:7594",
        "SOCKS 161.35.90.93:1083",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 45.74.31.30:5047",
        "SOCKS 174.138.162.37:37588",
        "SOCKS 45.74.31.30:6134",
        "SOCKS 45.194.41.103:8080",
        "SOCKS 45.74.31.30:7811",
        "SOCKS 45.74.31.30:11078",
        "SOCKS 45.74.31.42:4011",
        "SOCKS 45.74.31.42:13473",
        "SOCKS 45.74.31.30:7098",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 103.161.104.105:1080",
        "SOCKS 45.74.31.40:13060",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}