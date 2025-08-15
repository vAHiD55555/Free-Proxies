function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.20:6231",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 171.232.61.132:4001",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 103.189.116.138:1220",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 162.212.153.46:8888",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 188.235.146.220:40754",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 103.81.194.120:8080",
        "SOCKS 14.249.38.244:10008",
        "SOCKS 103.88.211.163:8080",
        "SOCKS 159.89.98.131:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}