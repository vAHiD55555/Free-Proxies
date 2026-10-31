function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.85.93.15:4567",
        "SOCKS 45.74.31.41:13488",
        "SOCKS 64.90.11.174:555",
        "SOCKS 8.211.51.115:1081",
        "SOCKS 109.120.187.29:8080",
        "SOCKS 66.97.37.159:1080",
        "SOCKS 84.254.198.175:1080",
        "SOCKS 163.223.77.236:6666",
        "SOCKS 45.74.31.41:5251",
        "SOCKS 47.251.74.38:8009",
        "SOCKS 185.137.93.173:1080",
        "SOCKS 185.242.107.224:9999",
        "SOCKS 45.74.31.41:6132",
        "SOCKS 207.90.237.86:1080",
        "SOCKS 89.22.238.229:11080",
        "SOCKS 45.74.31.41:9063",
        "SOCKS 42.114.56.7:20001",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 46.32.187.70:10808",
        "SOCKS 45.43.90.198:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}