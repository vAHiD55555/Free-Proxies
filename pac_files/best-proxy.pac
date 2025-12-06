function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.49:5566",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 109.135.16.145:8789",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 52.201.85.24:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}