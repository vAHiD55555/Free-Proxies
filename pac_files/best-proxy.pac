function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 161.35.90.93:1081",
        "SOCKS 139.162.36.238:1080",
        "SOCKS 45.74.31.30:5114",
        "SOCKS 45.74.31.42:7995",
        "SOCKS 118.145.141.251:44085",
        "SOCKS 161.35.90.93:1082",
        "SOCKS 118.145.141.251:44142",
        "SOCKS 45.74.31.42:35277",
        "SOCKS 45.74.31.30:33828",
        "SOCKS 118.145.141.251:44191",
        "SOCKS 3.92.229.175:1080",
        "SOCKS 118.145.141.251:44020",
        "SOCKS 45.74.31.30:10045",
        "SOCKS 45.74.31.42:4626",
        "SOCKS 118.145.141.251:44098",
        "SOCKS 118.145.141.251:44186",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 45.74.31.30:31676",
        "SOCKS 45.74.31.42:8180",
        "SOCKS 37.18.73.60:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}