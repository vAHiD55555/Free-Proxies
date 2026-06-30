function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.250.16.247:1080",
        "SOCKS 119.148.7.10:22122",
        "SOCKS 168.138.210.69:1080",
        "SOCKS 158.220.127.135:9050",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 68.233.127.229:1080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 178.156.224.42:3128",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 185.133.239.244:32784",
        "SOCKS 118.70.67.11:1080",
        "SOCKS 110.235.247.154:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 168.253.92.93:10808",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 103.82.23.118:6174",
        "SOCKS 47.253.211.16:1080",
        "SOCKS 46.30.41.59:9955",
        "SOCKS 195.2.67.21:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}