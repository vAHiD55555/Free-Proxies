function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.194.217.97:1080",
        "SOCKS 118.145.141.251:44202",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 45.74.31.42:6099",
        "SOCKS 45.74.31.42:47422",
        "SOCKS 118.145.141.251:44144",
        "SOCKS 195.19.50.130:1080",
        "SOCKS 45.74.31.30:9796",
        "SOCKS 118.145.141.251:44219",
        "SOCKS 124.248.177.43:1080",
        "SOCKS 202.62.50.52:1080",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 84.22.132.84:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 139.28.240.202:1082",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 118.145.141.251:44237",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 45.74.31.30:8118",
        "SOCKS 45.74.31.30:10088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}