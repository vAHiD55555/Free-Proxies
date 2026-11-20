function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 149.129.226.9:194",
        "SOCKS 65.109.219.215:9094",
        "SOCKS 118.68.3.12:1080",
        "SOCKS 174.138.161.148:30659",
        "SOCKS 195.19.50.130:1080",
        "SOCKS 8.130.71.75:1080",
        "SOCKS 78.37.113.29:5555",
        "SOCKS 157.66.36.57:69",
        "SOCKS 45.8.99.175:40001",
        "SOCKS 31.41.227.175:1080",
        "SOCKS 37.46.135.93:1080",
        "SOCKS 65.21.19.137:10469",
        "SOCKS 160.30.204.24:40000",
        "SOCKS 27.74.14.42:5000",
        "SOCKS 195.239.134.215:1080",
        "SOCKS 43.133.21.24:3001",
        "SOCKS 69.174.54.97:10000",
        "SOCKS 109.188.92.100:1080",
        "SOCKS 60.51.41.211:1080",
        "SOCKS 113.164.175.66:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}