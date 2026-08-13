function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.238.60.156:8000",
        "SOCKS 161.97.119.1:8888",
        "SOCKS 103.119.60.219:1080",
        "SOCKS 47.238.60.156:9999",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 91.206.14.55:1080",
        "SOCKS 144.31.189.114:1080",
        "SOCKS 8.210.17.35:8445",
        "SOCKS 14.224.194.181:2080",
        "SOCKS 38.76.215.92:1080",
        "SOCKS 144.124.232.204:5222",
        "SOCKS 191.223.220.23:1080",
        "SOCKS 89.223.121.59:1080",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 185.133.239.244:32784",
        "SOCKS 202.62.50.8:1080",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 27.155.93.29:5080",
        "SOCKS 198.98.57.207:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}