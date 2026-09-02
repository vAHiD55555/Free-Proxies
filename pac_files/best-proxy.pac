function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:33155",
        "SOCKS 103.191.218.119:69",
        "SOCKS 45.74.31.42:6864",
        "SOCKS 124.41.225.101:1080",
        "SOCKS 45.74.31.30:11005",
        "SOCKS 95.81.103.220:1080",
        "SOCKS 109.123.251.109:1080",
        "SOCKS 3.10.170.234:3128",
        "SOCKS 45.74.31.30:21082",
        "SOCKS 174.138.162.35:8001",
        "SOCKS 147.45.221.111:1082",
        "SOCKS 158.94.216.241:9097",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 201.165.172.14:1080",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 213.27.29.153:51000",
        "SOCKS 103.151.74.5:2025",
        "SOCKS 144.126.197.184:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}