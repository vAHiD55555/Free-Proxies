function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.113.222.205:57226",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 223.27.82.91:1080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 119.75.57.106:33333",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 103.249.116.112:44331",
        "SOCKS 191.5.38.6:54121",
        "SOCKS 202.40.178.234:1080",
        "SOCKS 14.241.80.37:8080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 43.210.30.230:507",
        "SOCKS 138.68.21.132:45793",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 157.180.121.252:33547",
        "SOCKS 51.222.241.8:42378",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}