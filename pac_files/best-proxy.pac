function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 101.79.29.143:3128",
        "SOCKS 118.145.141.251:44116",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 110.235.246.62:1080",
        "SOCKS 45.74.31.42:27612",
        "SOCKS 144.31.222.106:7890",
        "SOCKS 43.164.136.189:1080",
        "SOCKS 139.28.240.202:1082",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 151.241.217.102:1080",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 5.104.206.191:1080",
        "SOCKS 116.48.170.221:11000",
        "SOCKS 119.148.20.109:22122",
        "SOCKS 202.5.47.60:1080",
        "SOCKS 81.0.49.104:18500",
        "SOCKS 118.145.141.251:44234",
        "SOCKS 161.97.153.238:9050",
        "SOCKS 45.74.31.42:8447",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}