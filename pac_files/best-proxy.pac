function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.192.9.27:1080",
        "SOCKS 96.60.107.42:9050",
        "SOCKS 104.194.8.103:40001",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 68.183.60.51:3129",
        "SOCKS 171.253.95.28:2089",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 194.163.174.78:1088",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 80.72.180.122:1080",
        "SOCKS 171.25.158.95:1080",
        "SOCKS 141.147.10.92:555",
        "SOCKS 147.45.60.139:1082",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 103.171.240.198:8080",
        "SOCKS 112.216.54.226:12121",
        "SOCKS 192.144.57.124:9050",
        "SOCKS 104.219.236.127:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}