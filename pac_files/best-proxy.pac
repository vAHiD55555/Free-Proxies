function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 128.140.76.145:10773",
        "SOCKS 117.74.65.207:443",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 91.205.131.251:1080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 128.140.76.145:14954",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 67.201.35.145:4145",
        "SOCKS 67.43.236.21:22469",
        "SOCKS 34.124.190.108:8080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 183.80.54.224:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}