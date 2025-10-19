function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 165.227.174.249:33080",
        "SOCKS 185.93.89.147:8118",
        "SOCKS 185.93.89.182:4040",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 185.93.89.182:4842",
        "SOCKS 185.93.89.158:5506",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 190.119.160.27:56160",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 160.25.8.141:11011",
        "SOCKS 117.74.65.207:443",
        "SOCKS 173.249.38.205:3128",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 185.93.89.180:4048",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 160.19.16.86:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}