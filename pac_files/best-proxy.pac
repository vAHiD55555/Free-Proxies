function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:13111",
        "SOCKS 45.66.249.187:8080",
        "SOCKS 8.211.51.115:84",
        "SOCKS 45.74.31.30:38480",
        "SOCKS 45.74.31.42:4281",
        "SOCKS 135.181.18.104:1080",
        "SOCKS 45.74.31.42:8644",
        "SOCKS 45.74.31.42:5996",
        "SOCKS 185.118.51.163:3128",
        "SOCKS 91.210.171.169:9050",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 111.119.162.248:10971",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 160.238.65.3:3128",
        "SOCKS 174.138.165.202:36097",
        "SOCKS 43.164.136.189:1080",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 13.125.44.24:80",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 85.193.65.88:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}