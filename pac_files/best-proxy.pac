function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 154.72.204.78:8080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 202.62.55.43:1080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 202.62.59.234:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 47.83.27.173:1122",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 24.37.120.42:1080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 202.40.184.54:64564",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}