function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.219.236.127:1080",
        "SOCKS 45.77.37.39:2043",
        "SOCKS 182.204.178.46:1080",
        "SOCKS 103.216.49.147:1080",
        "SOCKS 43.135.135.65:1080",
        "SOCKS 150.241.115.167:1080",
        "SOCKS 147.45.66.116:1082",
        "SOCKS 5.189.160.163:9100",
        "SOCKS 47.81.56.193:8888",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 176.37.107.86:11111",
        "SOCKS 79.126.81.69:1080",
        "SOCKS 34.84.162.206:38080",
        "SOCKS 112.201.189.221:5050",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 103.75.118.84:1080",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 45.77.37.39:2045",
        "SOCKS 140.245.53.190:1088",
        "SOCKS 37.18.73.60:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}