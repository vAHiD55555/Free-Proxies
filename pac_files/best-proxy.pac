function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.36.190:1088",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 185.93.89.188:4963",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 47.250.51.110:8081",
        "SOCKS 51.48.124.225:41",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 208.87.243.199:7878",
        "SOCKS 60.249.94.59:3128",
        "SOCKS 213.230.121.73:3128",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 185.93.89.164:5506",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 185.93.89.143:9378",
        "SOCKS 72.10.160.92:12137",
        "SOCKS 91.151.88.220:6618",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}