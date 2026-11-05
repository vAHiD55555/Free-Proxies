function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.255.17.68:7890",
        "SOCKS 54.152.244.190:6000",
        "SOCKS 45.74.31.41:9891",
        "SOCKS 45.74.31.41:10929",
        "SOCKS 87.239.251.202:1081",
        "SOCKS 72.56.73.224:80",
        "SOCKS 45.74.31.47:8935",
        "SOCKS 87.71.154.56:9050",
        "SOCKS 45.74.31.47:10924",
        "SOCKS 212.220.113.31:1080",
        "SOCKS 103.182.22.57:9000",
        "SOCKS 38.207.160.120:11080",
        "SOCKS 45.74.31.40:4024",
        "SOCKS 144.172.104.68:1080",
        "SOCKS 45.74.31.47:8284",
        "SOCKS 202.160.76.167:1080",
        "SOCKS 91.90.25.84:1080",
        "SOCKS 43.167.166.56:1080",
        "SOCKS 45.74.31.40:9759",
        "SOCKS 31.56.78.41:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}